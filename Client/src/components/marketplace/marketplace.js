import "./marketplace.scss";
import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList";
import axios from "axios";
import {
  featuredProducts,
  otherProductsSection1,
  otherProductsSection2,
  otherProductsSection3,
  otherProductsSection4,
} from "../../allProductsData";
import { validateSession_id, getAmazonData } from "../../requests";

const stop = 1

async function getData() {
    return getAmazonData()
}

export default function Marketplace() {

  /*const load = validateSession_id()

  const username = load.username
  var money = load.money*/

  // initial use state submenu selected is "featured". setSelected is used to determine the page to take the user to, when selected
  const [selected, setSelected] = useState("featured");

  // Blank in initial state. Used for the data of projects in each subsection. setData changes the data with the switch cases in useEffect()
  const [data, setData] = useState([]);

  const current = 1
  
  var bounds = [[0, 10], [10, 25], [25, 50], [50, 100], [100, 1000000]]
  var allData = [[], [], [], [], []]

  useEffect(() => {
        getAmazonData().then((response) => {return response}).then((r) => {
            r.sort(function(a, b) {return a.price < b.price})
            for (var item of r) {
                for (var i = 0; i < bounds.length; ++i) {
                    if (item.price >= bounds[i][0] && item.price < bounds[i][1]) {
                        allData[i].push(item)
                    }
                }
            }
            setData(allData[0])
            console.log(allData)
        })
  }, [current])

  // holds all the titles for the submenu in the projects section
  const list = [
    {
      id: "0-10",
      title: "$0- $10",
    },
    {
      id: "10-25",
      title: "$10- $25",
    },
    {
      id: "25-50",
      title: "$25- $50",
    },
    {
      id: "50-100",
      title: "$50- $100",
    },
    {
      id: "100+",
      title: "$100+",
    },
  ];

  // every time the selected value changes (at the bottom of the function), useEffect() will be run
  useEffect(() => {
    switch (selected) {
      case "0-10":
        setData(allData[0]);
        break;
      case "10-25":
        setData(allData[1]);
        break;
      case "25-50":
        setData(allData[2]);
        break;
      case "50-100":
        setData(allData[3]);
        break;
      case "100+":
        setData(allData[4]);
        break;
      default:
        setData(allData[0]);
    }
  }, [selected]);

  return (
    <div className="marketplace" id="marketplace" style={{overflow: "scroll"}}>
      <h1>Marketplace</h1>
      <ul>
        {/* goes through EACH title (e.g. featured, mobile, web, etc...) and shows all the titles for submenu in Projects section.*/}
        {list.map((item) => (
          <ProductList
            title={item.title}
            // sending true or false if the selected item is the same as the item id
            active={selected === item.id}
            // sending the setSelected function to use for each submenu item.
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container" style={{minHeight: "100vh", overflow: "visible"}}>
        {/* shows all item images and titles for the current chosen submenu (e.g. featured, mobile, web, etc...). setData is used in useEffect() to change the shown data (projects) */}
        {data.map((data) => { return (
            <div className="item">
                <a href={data.link} rel="noreferrer" target="_blank">
                    <img src={data.image} alt="" />
                    <h3 style={{width: "100%", height: "30%", textAlign: "center", marginBottom: "5%"}}>{data.name}</h3>
                    <h3>${data.price}</h3>
                </a>
            </div>
        )})}
      </div>
    </div>
  );
}
