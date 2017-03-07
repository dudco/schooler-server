var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session')


app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(cookieSession({
  name: 'session',
  keys: ["asdfasdfasdjflsajdkfjslkdjfoiweuqruvzx"],
 
  // Cookie Options 
  maxAge: 24 * 60 * 60 * 1000 // 24 hours 
}))

mongoose.connect("mongodb://localhost:/d3s", function (err) {
    if(err){
        console.log("MongoDB Error!");

        throw err;
    }
});

var UserSchema = new mongoose.Schema({
    _id : String,
    name : String,
    accessToken : String,
    namecard : String,
    picture : String,
    phone: String,
    hope: String,
    hoby: String,
    email: String,
    club: String,
    rank: String,
    birth: String,
    location: String,
	token : String,
	school : String,
	nfc : String,
	subject : String,
})

Users = mongoose.model('users', UserSchema);

app.get('/', (req, res)=>{
    res.send(hello)
});

app.listen(3000, ()=>{
    console.log("server running 3000 port")
})

app.get('/get/nfc', (req, res) => {
	Users.findOne({nfc : req.param('nfc')}, (err, user) => {
		if(err){
               console.log("User find err in edit")
               throw err
            }else{
               res.send(200, user)
         }
	})
})

require('./route/auth')(app, Users)
require('./route/edit')(app, Users)
require('./route/image')(app, Users)
