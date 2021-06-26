import axios from 'axios';
import Button from "@material-ui/core/Button"

function Other() {

  const test = () => {
    console.log("haha")
    axios.post(`http://localhost:3001/purchaseProduct`, 
      {params: {
        name: "toy",
        price: 20,
        image: "https://m.media-amazon.com/images/I/71GS2dvqm9L._AC_UL320_.jpg",
        link: "https://www.amazon.ca/dp/B08DHWGY8J/?psc=1",
        ASIN: "B08DHWGY8J",
        email: "abhijain1778@gmail.com"
      }}) //this link needs to be changed
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  return(
    <Button
    onClick={test}>
      Click me!
    </Button>
  );

}

export default Other;
