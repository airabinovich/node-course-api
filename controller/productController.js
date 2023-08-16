const productService = require('../service/productService')

module.exports.createProduct = async (req, res) => {
    const response = {
        status: 200,
        message: "Product Created Successfully",
        body: {}
    }
    try {
        const createProductResult = await productService.createProduct(req.body)
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}

module.exports.getAllProducts = async (req, res) => {
    const response = {
        status: 200,
        message: "Products Fetched Successfully",
        body: {}
    }
    try {
        const createProductResult = await productService.getAllProducts(req.query)
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}

module.exports.getProductById = async (req, res) => {
    const response = {
        status: 200,
        message: "Product Fetched Successfully",
        body: {}
    }
    try {
        const createProductResult = await productService.getProductById(req.params)
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}

module.exports.updateProductById = async (req, res) => {
    const response = {
        status: 200,
        message: "Product Updated Successfully",
        body: {}
    }
    try {
        const createProductResult = await productService.updateProductById({id: req.params.id, updateProductData: req.body})
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}

module.exports.deleteProductById = async (req, res) => {
    const response = {
        status: 410,
        message: "Product Deleted Successfully",
        body: {}
    }
    try {
        const createProductResult = await productService.deleteProductById(req.params)
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}