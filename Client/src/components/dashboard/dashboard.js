import "./dashboard.scss"
import axios from "axios"
import { Redirect, Route } from "react-router-dom"



function Dashboard() {

  const cookie = document.cookie;
  var user;
  var money;

  axios.post(`http://localhost:3001/validateSession_id`, {session_id: cookie.split("=")[1]}) //this link needs to be changed
  .then(res => {
    if (typeof res.data.username !== 'undefined') {
      user = res.data.username;
      money = res.data.money;
    } else {
      window.location.replace("/");
    }
  });

  console.log(loggedIn)

  return(
    <div>
      <div className="dashboard">
        <div className="title">Welcome to your Investment Dashboard!</div>
      </div>
    </div>
  );
}

export default Dashboard;
