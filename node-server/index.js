const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userlogs');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    fname : {
        type:String,
        required:true
    },
    lname: String,
    mobile: Number,
    email: String,
    password: String,
    cpassword: String
});

const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/userlogs',async (req,res)=>{

    const pass1 = password = req.body.password;
    const pass2 = cpassword = req.body.cpassword;
    if( pass1 === pass2){
 
    let user = new User();
    user.fname = req.body.fname;
    user.lname  = req.body.lname;
    user.mobile = req.body.mobile;
    user.email = req.body.username;
    user.password = password;
    user.cpassword = cpassword;

    const doc = await user.save();

    console.log(doc);
    res.json(doc);
}
    else{
    alert("password are not matching") 
}
})


server.get('/userlogs',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
})