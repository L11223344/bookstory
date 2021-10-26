// create a reference to the model
let Book = require('../models/book');


module.exports.createUser = async function (req, res, next) {
    console.log('req', req.body)
    const user = new Book(req.body);
    const r = await user.save();

}
// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = async function (req, res, next) {

    try {
        const bookList = await Book.find({});
        if (bookList.length == 0) {
            console.log('no book found')
        } else {
            res.render('book/list', {
                title: 'Book List',
                books: bookList
            })
        }


    } catch (error) {
        console.error(error)
    }


}



// Gets a book by id and renders the details page.
module.exports.details = async (req, res, next) => {

    let id = req.params.id;
    const bookFound = await Book.findById(id);

    //show the edit view
    res.render('book/details', {
        title: 'Book Details',
        Title: 'My title',
        Author: bookFound.Author,
        Description: bookFound.Description,
        Price: bookFound.Price,
        Genre: bookFound.Genre
    })
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = async (req, res, next) => {

    try {

        res.render('book/details', {
            title: 'Book List',
            Title: "my title",
            Description: "",
            Price: "",
            Author: "",
            Genre: ""
        })



    } catch (error) {
        console.error(error)
    }

}

// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = async (req, res, next) => {

    // ADD YOUR CODE HERE
    const user = new Book(req.body);
    const savedUser = await user.save();
    if (savedUser) {
        res.redirect('/book/list')
    }

}

// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {

    // ADD YOUR CODE HERE

}

// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {

    // ADD YOUR CODE HERE

}

// Deletes a book based on its id.
module.exports.performDelete = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedBook = await Book.findOneAndDelete(id);
        res.redirect('/book/list')
    } catch (error) {
        console.error(error)
    }

}


module.exports.updateBook = async (req, res, next) => {
    const updateContact = await Book.findByIdAndUpdate(req.params.id, {
        Title: req.body.Title,
        Description: req.body.Description,
        Price: req.body.Price,
        Author: req.body.Author,
        Genre: req.body.Genre
    });

    res.redirect('/book/list')
}


module.exports.showDetailsPage = async (req, res) => {

    res.redirect('/book/details')
}