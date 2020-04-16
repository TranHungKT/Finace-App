const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');



function checkPassword(password){
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/;
    if(String(password).match(decimal)){
        return true;
    }else return false;
}


//signup user
router.post('/signup',(req,res)=> {

    const {username,email,password,confirmPassword} = req.body;
    fail = false;
    errors = "";

    if( !username || !email || !password || !confirmPassword){
        fail = true;
        errors = "Please fill all fields";
        return res.status(400).send(errors);
    }

    if(password !== confirmPassword){
        fail = true;
        errors = "Passwords do not match";
        return res.status(400).send(errors);
    }
    
    // if(checkPassword(password) == false){
    //     fail = true;
    //     errors = "Wrong password";
    //     return res.status(400).send(errors);
    // }


    if(fail == false){
       User.findOne()
        .then(user => {
            if(user){ 
                fail = true;
                errors = "Your email is registered"
                return res.status(400).send(errors)
            }else{
                const newUser = new User({
                    email: email,
                    name: username,
                    password: password
                });
                bcrypt.genSalt(10, (err,salt) => {
                    bcrypt.hash(newUser.password,salt, (err,hash)=> {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(()=> {})
                            .catch(err => console.log(err))
                    });
                });
                return res.status(200).send("You are registed now. Let's login")
            }
        })
        .catch(err => console.log(err))
    }
})

//login user
router.post('/login',(req,res) => {
    const {email,password} = req.body;

    fail = false; errors = "";
    
    if(!email || !password){
        fail = true;
        errors = "Please fill all fields";
        return res.status(400).send(errors);
    }

    User.findOne({email: email})
        .then(user => {
            if(user){
                bcrypt.compare(password,user.password,(err,isMatch) => {
                  if(err) throw err;
  
                  if(isMatch){
                    return res.status(200).send('OK')
                  }else{
                    return res.status(400).send('Password incorrect')
                  }
                })
              }else{
                return res.status(400).send('Cant find your email')
              }
        })
        .catch(err => console.log(err))

})


//forgot password 



module.exports = router;