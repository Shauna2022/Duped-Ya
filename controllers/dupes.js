//////////////////////////////DEPENDENCIES//////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express')
const router = express.Router()
const Dupe = require('../models/dupe')
////////////////////////////////////////////////////////////
//                      ROUTES
////////////////////////////////////////////////////////////
router.use(express.urlencoded({ extended: false }));
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
     Dupe.find({}, (error, foundDupes) => {
        res.render('dupes/index.ejs', {
            dupes: foundDupes,
        })
    })
})

//////////////////////// NEW ////////////////////////
router.get('/new', (req,res)=> {
    res.render('dupes/new.ejs')
})

router.post('/', (req, res) => {
    Dupe.create(req.body, (error, createdDupes) => {
        console.log(req.body, "this is dupes")
        res.redirect('/dupes')
    })
})
//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Dupe.findByIdAndRemove(req.params.id, () => {
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

//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Dupe.findById(req.params.id, (err, foundDupes) => {
        res.render('dupes/edit.ejs', {
            dupe: foundDupes,
        })
    })
})

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) => {
    Dupe.findById(req.params.id, (error, foundDupes) => {
        res.render('dupes/show.ejs', {
            dupe: foundDupes,
        })
    })
})

//////////////////////// EXPORTS////////////////////////////
module.exports = router