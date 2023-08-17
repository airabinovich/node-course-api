const express = require('express');
const router = express.Router()
const productController = require('../controller/productController')
const schemaValidator = require('./middleware/joiSchemaValidator')
const tokenValidator = require('./middleware/tokenValidation')
const schema = require("./schema/productSchema");

router.use(tokenValidator.validateToken)

router.post("/",
    schemaValidator.validateBody(schema.createProductSchema),
    productController.createProduct)

router.get("/",
    schemaValidator.validateQueryParams(schema.getAllProductsSchema),
    productController.getAllProducts)

router.get("/:id",
    schemaValidator.validateUrlEncodedParams(schema.getProductByIdSchema),
    productController.getProductById)

router.put("/:id",
    schemaValidator.validateUrlEncodedParams(schema.getProductByIdSchema),
    schemaValidator.validateBody(schema.updateProductSchema),
    productController.updateProductById)

router.delete("/:id",
    schemaValidator.validateUrlEncodedParams(schema.getProductByIdSchema),
    productController.deleteProductById)

module.exports = router;