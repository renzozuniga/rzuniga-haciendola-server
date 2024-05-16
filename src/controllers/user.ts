import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${username}`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username: username,
      password: hashedPassword,
    });

    res.json({
      msg: `Usuario ${username} creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user: any = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${username} en la base datos`,
    });
  }

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password Incorrecta`,
    });
  }

  const token = jwt.sign(
    {
      username: username,
    },
    process.env.SECRET_KEY || "usuario123"
  );

  res.json(token);
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { username } = req.body;

  const user: any = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${username} en la base datos`,
    });
  }

  const newPassword = crypto.randomBytes(8).toString("hex");

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  try {
    user.password = hashedPassword;
    await user.save();

    res.json({
      data: newPassword,
      msg: `Usuario ${username} tiene nueva password exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  const { username, newPassword, confirmPassword } = req.body;

  const user: any = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${username} en la base datos`,
    });
  }

  const passwordOld = await bcrypt.compare(user.password, newPassword);
  if (passwordOld) {
    return res.status(400).json({
      msg: `Password nueva debe ser diferente a la antigua`,
    });
  }

  const passwordValid = newPassword === confirmPassword;
  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password debe repetir para confirmar cambio`,
    });
  }

  const hashedPassword = await bcrypt.hash(confirmPassword, 10);

  try {
    user.password = hashedPassword;
    await user.save();

    res.json({
      data: newPassword,
      msg: `Usuario ${username} tiene nueva password exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }
};
