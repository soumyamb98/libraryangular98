const express = require("express");
const app = new express();


const multer = require('multer');


const authordata = require('./src/modal/authordata');
const booksdata = require('./src/modal/booksdata');

const userdata = require('./src/modal/userdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: true }));





var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect(' mongodb+srv://library:qVadZjAJxCR5mIs5@liba.xmpac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => console.log('mongo connected')).catch(err => console.log(err));// username='admin';
//  password='1234';
 
 
 function verifyToken(req, res, next) {
     if(!req.headers.authorization) {
       return res.status(401).send('Unauthorized request')
     }
     let token = req.headers.authorization.split(' ')[1]
     if(token === 'null') {
       return res.status(401).send('Unauthorized request')    
     }
     let payload = jwt.verify(token, 'secretKey')
     if(!payload) {
       return res.status(401).send('Unauthorized request')    
     }
    //  req.userId = payload.subject
     next()
}
   
app.post('/login', (req, res) => {
    let userdata = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userdata.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }    
})

//multer
var fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    },
});
var imageupload = multer({ storage: fileStorageEngine });



// books get
app.get('/books', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS")
    booksdata.find()
        .then((books) => {
            res.send(books);
        })
});
// books post
app.post('/books/insert',(req, res) => {
    
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST, PUT,DELETE,PATCH,OPTIONS")
    console.log(req.body);
    var product = {
        title: req.body.item.title,
        author: req.body.item.author,
        genre: req.body.item.genre,
        // image: req.file.item.filename,
        
        imageUrl: req.body.item.imageUrl
    }
    var bookssave = new booksdata(product);
    bookssave.save();

});
//books update
// app.put('/books/update', verifyToken, imageupload.single('image'), (req,res)=>{
app.put('/books/update',  (req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title=req.body.title,
        author=req.body.author,
        genre=req.body.genre,
        // image=req.file.filename,
        
        imageURL=req.body.imageUrl

    
    booksdata.findByIdAndUpdate({ "_id": id },
        {
            $set: {
                "title": title,
                "author": author,
                "genre": genre,
                // "image": image,
                                
                "imageUrl": imageUrl
            }
        })
        .then(function () {
            res.send();
        });
 })
 // books delete
app.delete('/books/remove/:id',(req,res)=>{
 
   id = req.params.id;
   booksdata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
    
 })

//authors get
app.get('/authors', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS")
    authordata.find()
        .then((authors) => {
            res.send(authors);
        })
});
// app.get('/products',function(req,res){
     
//      ProductData.find()
//                  .then(function(products){
//                      res.send(products);
//                  });
//  });
//authors post
// app.post('/authors/insert', verifyToken, imageupload.single('image'), (req, res) => {
app.post('/authors/insert',(req, res) => {
    
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST, PUT,DELETE,PATCH,OPTIONS")
    console.log(req.body);
    var product = {
        title: req.body.item.title,
        author: req.body.item.author,
        genre: req.body.item.genre,
        // image: req.file.item.filename,
        
        imageUrl: req.body.item.imageUrl
    }
    var authorssave = new authordata(product);
    authorssave.save();

});

//authors put
// app.put('/authors/update', verifyToken, imageupload.single('image'), (req,res)=>{
app.put('/authors/update',  (req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title=req.body.title,
        author=req.body.author,
        genre=req.body.genre,
        // image=req.file.filename,
        
        imageUrl=req.body.imageUrl

    
        authordata.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "author":author,
                                "genre":genre,
                                "image":image,
                                
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
// authors delete
app.delete('/authors/remove/:id',(req,res)=>{
 
   id = req.params.id;
   authordata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
    
 })




 
 
//  app.post('/insert',verifyToken,function(req,res){
    
//      console.log(req.body);
    
//      var product = {       
//          productId : req.body.product.productId,
//          productName : req.body.product.productName,
//          productCode : req.body.product.productCode,
//          releaseDate : req.body.product.releaseDate,
//          description : req.body.product.description,
//          price : req.body.product.price,
//          starRating : req.body.product.starRating,
//          imageUrl : req.body.product.imageUrl,
//     }       
//     var product = new ProductData(product);
//     product.save();
//  });
 
//  app.get('/:id',  (req, res) => {
   
//    const id = req.params.id;
//      ProductData.findOne({"_id":id})
//      .then((product)=>{
//          res.send(product);
//      });
//  })
 
 

app.listen(5000, () => {
    console.log('app listening at 5000')
})