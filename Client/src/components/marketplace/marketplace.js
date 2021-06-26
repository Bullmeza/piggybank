import "./marketplace.scss";
import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList"
import axios from "axios"
import {featuredProducts, 
    otherProductsSection1, 
    otherProductsSection2, 
    otherProductsSection3, 
    otherProductsSection4} from "../../allProductsData"

export default function Marketplace() {

    axios.post(`http://localhost:3001/getData`, {}) //this link needs to be changed
    .then(res => {
        console.log(res);
        console.log(res.data);
    });

    // initial use state submenu selected is "featured". setSelected is used to determine the page to take the user to, when selected
    const[selected,setSelected] = useState("featured");

    // Blank in initial state. Used for the data of projects in each subsection. setData changes the data with the switch cases in useEffect()
    const[data,setData] = useState([]);

    // holds all the titles for the submenu in the projects section
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "more_products_1",
            title: "Section 1 of Products",
        },
        {
            id: "more_products_2",
            title: "Section 2 of Products",
        },
        {
            id: "more_products_3",
            title: "Section 3 of Products",
        },
        {
            id: "more_products_4",
            title: "Section 4 of Products",
        },
    ];

    // every time the selected value changes (at the bottom of the function), useEffect() will be run
    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredProducts);
                break;
            case "more_products_1":
                setData(otherProductsSection1);
                break;
            case "more_products_2":
                setData(otherProductsSection2);
                break;
            case "more_products_3":
                setData(otherProductsSection3);
                break;
            case "more_products_4":
                setData(otherProductsSection4);
                break;
            default:
                setData(featuredProducts);
        }

    },[selected]);

    return (
        <div className="marketplace" id="marketplace">
            <h1>Marketplace</h1>
            <ul>
                {/* goes through EACH title (e.g. featured, mobile, web, etc...) and shows all the titles for submenu in Projects section.*/}
                {list.map(item=>(
                    <ProductList 
                        title={item.title} 

                        // sending true or false if the selected item is the same as the item id
                        active={selected === item.id} 

                        // sending the setSelected function to use for each submenu item.
                        setSelected={setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                
                {/* shows all item images and titles for the current chosen submenu (e.g. featured, mobile, web, etc...). setData is used in useEffect() to change the shown data (projects) */}
                {data.map((data)=>(
                <div className="item">
                    <a href={data.url} rel="noreferrer" target="_blank" rel="noreferrer">
                            <img
                                src={data.img}
                                alt=""
                            />
                            <h3>{data.title}</h3>
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
}
