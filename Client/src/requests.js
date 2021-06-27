import axios from "axios";
const domain = 'https://piggybankserver.herokuapp.com';


export async function validateSession_id() {
    const session_id = document.cookie.split('=')[1];
    console.log(session_id)

    const res = await axios.post(`${domain}/validateSession_id`,{
        "session_id" : session_id
    })

    console.log("this is the validate", res.data)

    const loggedIn = typeof res.data.error === 'undefined';

    if (loggedIn) {
        console.log("validation brought us here")
        return {username: res.data.username, money: res.data.money, email: res.data.email, allowance: res.data.allowance}
    } else {
        const path = window.location.pathname;
        if(path !== "/" && path !== "/login" && path !== "/signup"){
            document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            window.location.replace("/login");
        }
    }
}


export async function getAmazonData() {
    const res = await axios.get(`${domain}/getData`, {})
    console.log(res.data)
    return res.data
}


export async function purchaseProduct(name,price,image,link,asin,email){
    console.log(name, price, image, link, asin, email)
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

export async function editMoney(money){
    const session_id = document.cookie.split('=')[1];
    await axios.post(`${domain}/editMoney`, {
        "session_id" : session_id,
        "money" : money
    });
    window.location.replace("/dashboard")
}

export async function editAllowance(allowance){
    const session_id = document.cookie.split('=')[1];
    await axios.post("https://piggybankserver.herokuapp.com/editAllowance", {
        "session_id" : session_id,
        "allowance" : allowance
    });
    window.location.replace("/dashboard")
}

