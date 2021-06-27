import "./landing.scss"

import {Container} from "@material-ui/core";

import { init } from "ityped";
import { useEffect, useRef } from "react"
import Button from '@material-ui/core/Button';

const LandingPage = () =>{

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {

            // changing a few default values below. you can customize more features by searching library online
            showCursor: true, // shows the blinking typing cursor beside the text
            backDelay: 1500, // delay the typing for 1.5 seconds.
            backSpeed: 60, // type back speed in milliseconds (changed default value of 50ms)
            strings: ["Lego Sets", "Video Games", "Dollhouses", "Remote Control Toys"]
        });
    },[])

    return (
        
        <div className="landing" id="landing">
            <div className="left">
                <div className="wrapper">
                    <img src="assets/PiggyBank_Logo.png" alt="" />
                    <h3>Save up and buy <span ref={textRef}></span></h3>
                    <div className="buttons">
                        <Button variant="contained" color="primary" className="signUpButton" href="signup">Sign up</Button>
                        <Button variant="outlined" className="loginButton" href="login">Login</Button>
                    </div>
                </div>
                
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/lego_products.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;