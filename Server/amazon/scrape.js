const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');



const scrapeAmazon = async () => {
    let links = require('./input.json')
    console.log(links)

    // const { data: html } = await  axios.get(productURL, {
    //     headers: {
    //         'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
    //     }
    // })

}

module.exports = scrapeAmazon;
// app.post("/getBarcodeInfo", async(req,res)=>{
//     try{
//         console.log(req.body)
//         var response = await axios.get("https://www.amazon.ca/Nintendo-Switch-Animal-Crossing-Horizons/dp/B084DDDNRP/ref=sr_1_5?dchild=1&keywords=switch&qid=1624677941&sr=8-5")
//         const $ = cheerio.load(response.data)
//         var name = ""
//         var img = $("#productTitle")
//         res.status(200).send({name: name, image: img});
//     } catch (err){
//         res.status(404).send("Bad request");
//     }
// });