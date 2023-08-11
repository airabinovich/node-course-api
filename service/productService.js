const Product = require('../database/model/product')

module.exports.createProduct = async (createProductData) => {
    try {
        let product = new Product({...createProductData});
        let result = await product.save();
        return result.toObject()
    } catch (error) {
        console.log("Error saving product in the DB", error)
        throw new Error(error);
    }
}

module.exports.getAllProducts = async ({skip = "0", limit = "100"}) => {
    try {
        const products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit))
        return products.map(product => {
            return product.toObject();
        })
    } catch (error) {
        console.log("Error fetching products from the DB", error)
        throw new Error(error);
    }
}