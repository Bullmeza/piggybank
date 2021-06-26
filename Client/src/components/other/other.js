import axios from 'axios';
import Button from "@material-ui/core/Button"

function Other() {

  const test = () => {
    console.log("haha")
    axios.get(`http://localhost:3001/sendMail`, {params: {email: "abhijain1778@gmail.com"}}) //this link needs to be changed
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
