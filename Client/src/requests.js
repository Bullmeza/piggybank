import axios from "axios";
const domain = 'http://localhost:3001';


export async function validateSession_id() {
    const session_id = document.cookie.split('=')[1];
    console.log(session_id)

    const res = await axios.post(`${domain}/validateSession_id`,{
        "session_id" : session_id
    })
    console.log(res)
    const loggedIn = typeof res.data.err !== 'undefined';

    if (loggedIn) {
        return {username: res.data.username, money: res.data.money, email: res.data.email}
    } else {
        const path = window.location.pathname;
        if(path !== "/" && path !== "/login" && path !== "/signup"){
            window.location.replace("/");
        }
    }
}


export async function getAmazonData() {
    const res = await axios.get(`http://localhost:3001/getData`, {})
    console.log(res.data)
    return res.data
}


export async function purchaseProduct(name,price,image,link,asin,email){
    axios.post(`${domain}/purchaseProduct`, {
        params: {
            name: name,
            price: price,
            image: image,
            link: link,
            ASIN: asin,
            email: email,
        },
    })   
}


