"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
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
router.post("/", user_1.newUser);
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
router.post("/login", user_1.loginUser);
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
router.post("/forgot-password", user_1.forgotPassword);
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
router.post("/change-password", user_1.changePassword);
exports.default = router;
