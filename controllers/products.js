////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const Product = require('../models/product')
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
    Product.find({}, (error, foundProducts) => {
        res.render('products/index.ejs', {
            products: foundProducts
        })
    })
})
//////////////////////// NEW ////////////////////////
router.get('/new', (req,res)=> {
    res.render('products/new.ejs')
})

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, () => {
        res.redirect('/products');
    });
});

//////////////////////// UPDATE ////////////////////////


//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/products')
    })
})
//////////////////////// EDIT ////////////////////////


//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('products/show.ejs', {
            Product: foundProduct
        })
    })
})

//////////////////////// EXPORTS////////////////////////////
module.exports = router
