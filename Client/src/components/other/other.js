import axios from "axios";

function Other() {
  console.log("haha");
  /*axios
    .post(`http://localhost:3001/purchaseProduct`, {
      params: {
        name: "toy",
        price: 20,
        image: "https://m.media-amazon.com/images/I/71GS2dvqm9L._AC_UL320_.jpg",
        link: "https://www.amazon.ca/dp/B0833PBSPF/?psc=1",
        ASIN: "B0833PBSPF",
        email: "abhijain1778@gmail.com",
      },
    }) //this link needs to be changed
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });*/

  return (
    <div className="other">
      Error. Are you searching for your hopes and dreams? It seems your page was
      not found. Try another page or head back to home.
    </div>
  );
}

export default Other;
