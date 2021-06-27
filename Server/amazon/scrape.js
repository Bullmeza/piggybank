const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');


const scrapeAmazon = async () => {
    let links = require('./input.json')
    let productData = [];

    let promises = links.map( async (link) => {
            const response = await axios.get(link.link, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
                }
            })
            const $ = cheerio.load(response.data)
            var price = $("#price_inside_buybox").text();
            if (price === "") {
                price = $("#priceblock_ourprice").text();
            }
            var image = $("#landingImage").attr('src')
            var ASIN = $('th:contains("ASIN") ~ ').text()
            productData.push({
                "name" : link.name.trim(),
                "price" : parseFloat(price.trim().split("$")[1]),
                "image" : image.trim(),
                "link" : link.link.trim(),
                "ASIN" : ASIN.trim(),
            })
    });
    await Promise.all(promises);

    fs.writeFile('./amazon/output.json', JSON.stringify(productData, null, 4), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

module.exports = scrapeAmazon;
