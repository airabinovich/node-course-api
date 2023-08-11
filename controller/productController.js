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
        res.status(500).send({...response, status: 500, message: "An error occurred"})
    }
}