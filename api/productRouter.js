const express = require('express');
const router = express.Router()
const productController = require('../controller/productController')
const schemaValidator = require('./middleware/joiSchemaValidator')
const schema = require("./schema/productSchema");

router.post("/", schemaValidator.validateBody(schema.createProductSchema), productController.createProduct)
router.get("/", schemaValidator.validateQueryParams(schema.getAllProductsSchema), productController.getAllProducts)

module.exports = router;