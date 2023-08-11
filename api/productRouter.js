const express = require('express');
const router = express.Router()
const productController = require('../controller/productController')
const schemaValidator = require('./middleware/joiSchemaValidator')
const schema = require("./schema/createProduct");

router.post("/", schemaValidator.validateBody(schema.createProductSchema), productController.createProduct)

module.exports = router;