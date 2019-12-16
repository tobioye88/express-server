const express = require('express')
const authenticate = express.Router();

authenticate.post('/', (req, res) => {
    console.log("Attempting to authenticate");
    // const username = req.body.username;
    // const password = req.body.password;

    // if(!username || !password){
    //     res.status(401);
    //     return res.json({ message: "Username or password is invalid"});
    // }
    res.send(req.body.username);


});


module.exports = authenticate;