//////////////////////////////DEPENDENCIES//////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express')
const router = express.Router()
const Dupe = require('../models/dupes.js');
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
     Dupe.find({}, (error, foundDupes) => {
        res.render('dupes/index.ejs', {
            dupes: foundDupes
        })
    })
})
//////////////////////// NEW ////////////////////////
router.get('/new', (req,res)=> {
    res.render('dupes/new.ejs')
})

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Dupes.findByIdAndRemove(req.params.id, () => {
        res.redirect('/dupes')
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Dupe.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/dupes')
    })
})

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Dupe.create(req.body, (error, createdDupe) => {
        res.redirect('/dupes')
    })
})
//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Dupe.findById(req.params.id, (err, foundDupes) => {
        res.render('dupes/edit.ejs', {
            dupe: foundDupes
        })
    })
})

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) => {
    Dupe.findById(req.params.id, (error, found) => {
        res.render('dupes/show.ejs', {
            dupe: foundDupes
        })
    })
})

//////////////////////// EXPORTS////////////////////////////
module.exports = router