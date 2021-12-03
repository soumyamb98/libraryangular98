const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=> console.log('mongo connectedbooks')).catch(err=>console.log(err));

const schema = mongoose.Schema;
const bookSchema = new schema({
    booksId: String,
    title: String,
    author: String,
    genre: String,
    image: String
});



var modelbookdataexport = mongoose.model('My_books', bookSchema);
module.exports = modelbookdataexport;


// mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ;