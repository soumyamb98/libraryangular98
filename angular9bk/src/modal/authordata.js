const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=> console.log('mongo connectedauthors')).catch(err=>console.log(err));

const schema = mongoose.Schema;
const authorSchema = new schema({
    // authorsId: String,
    title: String,
    author: String,
    genre: String,
    // image: String,
    imageUrl: String
});



var modelauthordataexport = mongoose.model('My_Authors', authorSchema);
module.exports = modelauthordataexport;


// mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ;