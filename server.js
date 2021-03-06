////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const productsController = require('./controllers/products.js');
require('dotenv').config()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dupesController = require('./controllers/dupes.js')
const PORT = process.env.PORT || 3000;
const Dupe = require('./models/dupe')
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
app.use('/public', express.static('public'));
app.use('/products', productsController);
app.use('/dupes', dupesController);
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
app.get('/', (req, res) => {
        res.render('index.ejs', {
  })
})

////////////////////////////////////////////////////////////
//                      LISTEN FOR PORT
////////////////////////////////////////////////////////////
app.listen(PORT, () =>{
    console.log('Express is listening')
})