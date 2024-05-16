import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product";
import validateToken from "./validate-token";

const router = Router();

/**
 * @openapi
 * /api/products:
 *   get:
 *     tags:
 *       - Products
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       handle:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       sku:
 *                         type: number
 *                       grams:
 *                         type: number
 *                       stock:
 *                         type: number
 *                       price:
 *                         type: number
 *                       compare_price:
 *                         type: number
 *                       barcode:
 *                         type: number
 *                       createdAt:
 *                         type: date
 *                       updatedAt:
 *                         type: date
 */
router.get("/", validateToken, getProducts);

/**
 * @openapi
 * /api/products:
 *   post:
 *     tags:
 *       - Products
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       handle:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       sku:
 *                         type: number
 *                       grams:
 *                         type: number
 *                       stock:
 *                         type: number
 *                       price:
 *                         type: number
 *                       compare_price:
 *                         type: number
 *                       barcode:
 *                         type: number
 *                       createdAt:
 *                         type: date
 *                       updatedAt:
 *                         type: date
 */
router.post("/", validateToken, createProduct);

/**
 * @openapi
 * /api/products/{productId}:
 *   put:
 *     tags:
 *       - Products
 *     parameters:
 *       - name: productId
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       handle:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       sku:
 *                         type: number
 *                       grams:
 *                         type: number
 *                       stock:
 *                         type: number
 *                       price:
 *                         type: number
 *                       compare_price:
 *                         type: number
 *                       barcode:
 *                         type: number
 *                       createdAt:
 *                         type: date
 *                       updatedAt:
 *                         type: date
 */
router.put("/:id", validateToken, updateProduct);

/**
 * @openapi
 * /api/products/{productId}:
 *   delete:
 *     tags:
 *       - Products
 *     parameters:
 *       - name: productId
 *     responses:
 *       '200':
 *         description: OK
 *         message: "Product is deleted !"
 */
router.delete("/:id", validateToken, deleteProduct);

export default router;
