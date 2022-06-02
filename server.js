////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const productsController = require('./controllers/products.js')
require('dotenv').config()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
////////////////////////////////////////////////////////////
//                      SET UP DATEBASE
//////////////////////////////////////////////////////////// 
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/products', productsController);
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
app.get('/', (req, res) => {
    Product.find({}, (error, foundProducts) => {
        res.render('products/index.ejs', {
            products: foundProducts
        })
    })
})

////////////////////////////////////////////////////////////
//                      LISTEN FOR PORT
////////////////////////////////////////////////////////////
app.listen(3000, () =>{
    console.log('Express is listening')
})