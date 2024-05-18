const ProductModel = require('../models/product.model');

class ProductController {
    async getListProduct(req, res) {
        const products = await ProductModel.find();
        // return res.json(products);
        return products;
    }
    // async getProduct(req, res) {
    //     const product = await ProductModel.findById(req.params._id);
    //     return res.json(product);
    // }
    async getProduct(id) {
        const product = await ProductModel.findById(id);
        // console.log(product);
        return product;
    }
    async createProduct(req, res) {
        const product = req.body;
     
        const newProduct = new ProductModel(product);
        await newProduct.save();
     
        return res.json(newProduct);
     }
     async updateProduct(req, res) {
       
        const updates = req.body;

        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params._id, updates);
        return res.json(updatedProduct);  
    }

    async deleteProduct(req, res) {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(req.params._id);

            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }

            return res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting product', error });
        }
    }
};

module.exports = new ProductController();