import { Request, Response } from "express";
import { Product } from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(listProducts);
};

export const createProduct = async (req: Request, res: Response) => {
  if (
    !req.body.handle ||
    !req.body.title ||
    !req.body.description ||
    !req.body.sku ||
    !req.body.grams ||
    !req.body.stock ||
    !req.body.price ||
    !req.body.compare_price
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const product = await Product.create(req.body);
  res
    .status(200)
    .send({ message: "Product created successfully!", data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res
    .status(200)
    .send({ message: "Product updated successfully!", data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send({ message: "Product is deleted !" });
};
