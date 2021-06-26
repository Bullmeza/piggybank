const express = require("express");
const userModel = require("../models/user.js");
const app = express();


app.post("/validateSession_id",  async(req,res) => {
    try{
        const users = await userModel.find({session_id: req.body.session_id})
        if(users.length == 0){
            res.status(200).send({"error" : "No user found"});
        }else{
            res.status(200).send({"username" : users[0].username, "money" : users[0].money});
        }
    }catch(err){
        res.status(200).send({"error" : "Internal Error"});
    }

});

app.post("/login", async (req, res) => {
    try {
        const users = await userModel.find({email: req.body.email});
        if (users.length == 0) {
            res.status(200).send({"error" : "No account found using that email"});
        } else if (users[0].password != req.body.password) {
            res.status(200).send({"error" : "Incorrect password"});
        } else {
            res.status(200).send({"session_id": users[0].session_id})
        }
    } catch (err) {
        res.status(200).send({"error" : "Internal Error"});
    }
});

app.post("/signup", async (req, res) => {
    console.log(req.body)
    try {
        const user = new userModel(req.body);

        user.save((err) => {
            if (err) {
                res.status(200).send({"error" : "Upload error"});
            } else {
                res.status(200).send({"session_id": user.session_id})
            }
        });
    } catch (err) {
        res.status(200).send({"error" : "Internal error"});
    }
});


app.get("/getAllUsers", async (req, res) => {
    try {
        const purchases = await userModel.find();
        res.status(200).send(purchases)
    } catch (err) {
        res.status(200).send({"error" : "Internal error"});
    }
});

module.exports = app;