"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.Product.findAll({
        order: [["createdAt", "DESC"]],
    });
    res.json(listProducts);
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.handle ||
        !req.body.title ||
        !req.body.description ||
        !req.body.sku ||
        !req.body.grams ||
        !req.body.stock ||
        !req.body.price ||
        !req.body.compare_price) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const product = yield product_1.Product.create(req.body);
    res
        .status(200)
        .send({ message: "Product created successfully!", data: product });
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const product = yield product_1.Product.update(req.body, { where: { id: id } });
    res
        .status(200)
        .send({ message: "Product updated successfully!", data: product });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield product_1.Product.destroy({ where: { id: id } });
    res.status(200).send({ message: "Product is deleted !" });
});
exports.deleteProduct = deleteProduct;
