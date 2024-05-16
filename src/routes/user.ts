import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  loginUser,
  newUser,
} from "../controllers/user";

const router = Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: OK
 *
 */
router.post("/", newUser);

/**
 * @openapi
 * /api/users/login:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: OK
 *
 */
router.post("/login", loginUser);

/**
 * @openapi
 * /api/users/forgot-password:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: OK
 *
 */
router.post("/forgot-password", forgotPassword);

/**
 * @openapi
 * /api/users/change-password:
 *   post:
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: OK
 *
 */
router.post("/change-password", changePassword);

export default router;
