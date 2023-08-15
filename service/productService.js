const Product = require('../database/model/product')
const mongoose = require('mongoose')

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
        const products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return products.map(product => {
            return product.toObject();
        })
    } catch (error) {
        console.log("Error fetching products from the DB", error)
        throw new Error(error);
    }
}

module.exports.getProductById = async ({id}) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid Id");
        }
        const product = await Product.findById(id);
        if (!product) {
            throw new Error("Product Not Found");
        }
        return product.toObject();
    } catch (error) {
        console.log("Error fetching product from the DB", error);
        throw new Error(error);
    }
}

module.exports.updateProductById = async ({id, updateProductData}) => {
    console.log("ID:", id)
    console.log("DATA:", updateProductData)
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid Id");
        }
        if (!updateProductData) {
            throw new Error("No data to update the product")
        }

        const product = await Product.findOneAndUpdate(
            {_id: id},
            updateProductData,
            {new: true}
        )
        if (!product) {
            throw new Error("Product Not Found");
        }
        return product.toObject();
    } catch (error) {
        console.log("Error fetching product from the DB", error);
        throw new Error(error);
    }
}