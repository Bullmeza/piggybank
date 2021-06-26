const express = require("express");
var unirest = require("unirest");
var fs = require("fs")
const app = express();
app.use(express.json()) 



app.get("/getBarcodeInfo", async(req,res)=>{
    var req = unirest("GET", "https://amazon-products1.p.rapidapi.com/search");

    req.query({
        "country": "CA",
        "query": "toys",
        "page": "1"
    });

    req.headers({
        "x-rapidapi-key": "ea3264f0bcmsh20a82b041845d76p1dbf33jsna2dd2b132228",
        "x-rapidapi-host": "amazon-products1.p.rapidapi.com",
        "useQueryString": true
    });

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        for (var key in res.body) {
            console.log(key)
        }
        fs.writeFileSync("output.json", JSON.stringify(res.body.results, null, 4))
    });
    
});

module.exports = app;