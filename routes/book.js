var express = require('express');
var router = express.Router();
const books = require('../models/book')
let bookController = require('../controllers/book');
const { response } = require('express');


router.get('/showdetails', (req, res) => {

    res.render('book/details', {
        title: 'Book List',
        Title: "my title",
        Description: "",
        Price: "",
        Author: "",
        Genre: ""
    })
})

// Router for post data
router.post('/insert', bookController.createUser)
// Router for lists books function
router.get('/list', bookController.bookList);

// Routers for Add functions
router.get('/add', bookController.displayAddPage);
router.post('/add', bookController.processAddPage);

// Router for book details function
router.get('/:id', bookController.details);

// Router for edit a book
router.post('/:id', bookController.updateBook)
// Routers for edit functions
router.get('/edit/:id', bookController.displayEditPage);
router.post('/edit/:id', bookController.processEditPage);

// Router for Delete function
router.get('/delete/:id', bookController.performDelete);




router.get('/details', bookController.displayAddPage)



module.exports = router;