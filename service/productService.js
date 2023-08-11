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