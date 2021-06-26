import "./dashboard.scss"
import axios from "axios"
import { validateSession_id } from "../../requests";



function Dashboard() {

  const load = validateSession_id()

  const username = load.username
  var money = load.money

  return(
    <div>
      <div className="dashboard">
        <div className="title">Welcome to your Investment Dashboard!</div>
      </div>
    </div>
  );
}

export default Dashboard;
