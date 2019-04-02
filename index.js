//require express
const express = require('express');
//the port will be 3000
const PORT = 3000;
//express is a function that we call app for use
const app = express();
//grab the output from routes/books to power the app use
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

//the app listens for get/put/port/delete/etc
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});