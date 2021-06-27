const express = require("express");
const userModel = require("../models/user.js");
const app = express();


app.post("/validateSession_id",  async(req,res) => {
    try{
        const users = await userModel.find({session_id: req.body.session_id})
        if(users.length == 0){
            res.status(200).send({"error" : "No user found"});
        }else{
            res.status(200).send(
                {"username" : users[0].username, "money" : users[0].money, 
                "email" : users[0].email, "allowance" : users[0].allowance}
            );
        }
    }catch(err){
        res.status(200).send({"error" : "Internal Error"});
    }

});

app.post("/login", async (req, res) => {
    try {
        console.log("here")
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


app.post("/editMoney", async (req, res) => {
    try {
        const users = await userModel.find({"session_id" : req.body.session_id});
        if (users.length == 0) {
            res.status(200).send({"error" : "No account found using that email"});
        } else {
            const newMoney = parseFloat(users[0].money) + parseFloat(req.body.money);
            userModel.findOneAndUpdate({"session_id" : req.body.session_id}, {"money" : newMoney}, function(err, doc) {
                if (err) res.status(200).send({"error" : "Upload error"});
                res.status(200).send("OK")
            }); 
        }
    } catch (err) {
        res.status(200).send({"error" : "Internal error"});
    }
});


app.post("/editMoneyRedirect", async (req, res) => {
    try {
        const users = await userModel.find({"email" : req.body.email});
        if (users.length == 0) {
            res.status(200).send({"error" : "No account found using that email"});
        } else {
            const newMoney = parseFloat(users[0].money) - parseFloat(req.body.money);
            userModel.findOneAndUpdate({"email" : req.body.email}, {"money" : newMoney}, function(err, doc) {
                if (err) res.status(200).send({"error" : "Upload error"});
                res.redirect(`https://www.amazon.com/gp/aws/cart/add.html?AssociateTag=your-tag&ASIN.1=${req.body.ASIN}&Quantity.1=1`)
            }); 
        }
    } catch (err) {
    }
})

app.post("/editAllowance", async (req, res) => {
    try{
        userModel.findOneAndUpdate({"session_id" : req.body.session_id}, {"allowance" : req.body.allowance}, function(err, doc) {
            if (err) res.status(200).send({"error" : "Upload error"});
            res.status(200).send("OK")
        }); 
    }catch(err){
        res.status(200).send({"error" : "Internal error"});
    }
});

app.get("/getAllUsers", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users)
    } catch (err) {
        res.status(200).send({"error" : "Internal error"});
    }
});

module.exports = app;