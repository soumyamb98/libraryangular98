const mongoose = require('mongoose');
// mongoose.connect(' mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => console.log('mongo connectedusers')).catch(err => console.log(err));
const UserSchema = new mongoose.Schema({
    urme: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})
const user = mongoose.model("user", UserSchema);

module.exports = user;
