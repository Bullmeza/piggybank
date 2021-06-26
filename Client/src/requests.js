import axios from "axios";
const domain = 'http://localhost:3001';

export async function validateSession_id() {
    const session_id = document.cookie.split('=')[1];

    const res = await axios.post(`${domain}/validateSession_id`,{
        "session_id" : session_id
    })

    return res.data;
}


export async function purchaseProduct(name,price,image,link,email){
    // axios
    //     .post(`http://localhost:3001/purchaseProduct`, {
    //     params: {
    //         name: "toy",
    //         price: 20,
    //         image: "https://m.media-amazon.com/images/I/71GS2dvqm9L._AC_UL320_.jpg",
    //         link: "https://www.amazon.ca/dp/B0833PBSPF/?psc=1",
    //         ASIN: "B0833PBSPF",
    //         email: "abhijain1778@gmail.com",
    //     },
    //     }) //this link needs to be changed
    //     .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     });
}


