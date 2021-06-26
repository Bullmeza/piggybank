import "./topbar.scss";

// taking setMenuOpen and menuOpen as props from App.js
// you use setMenuOpen as a function, and use menuOpen as a variable
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        // if the menu is open (menuOpen is true), add active to the line, therefore, actively showing the menu
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="dashboard" className="logo">Kid Banking</a>
                    <div className="itemContainer">
                        <a href={"https://amazon.com"} rel="noreferrer" target="_blank" className="social">Amazon Marketplace</a>
                    </div>
                </div>
                <div className="right">
                    {/* if they click the three lines, switch the menu from open to close or close to open, i.e. the opposite of the current state */} 
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
