"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
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
router.get("/", validate_token_1.default, product_1.getProducts);
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
router.post("/", validate_token_1.default, product_1.createProduct);
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
router.put("/:id", validate_token_1.default, product_1.updateProduct);
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
router.delete("/:id", validate_token_1.default, product_1.deleteProduct);
exports.default = router;
