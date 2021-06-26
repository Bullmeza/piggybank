import "./menu.scss"


export default function Menu({ menuOpen, setMenuOpen }) {
    return (

        // if the menuOpen variable is true (which is possible from cliking the topbar menu three lines), make it use active class, so the menu is visible
        <div className={"menu " + (menuOpen && "active") }>
            <ul>

                {/* Not the best practice, since normally you should components so you only need to call onClick function once.
                Nonetheless, this onclick turns the menu off after the click a navigation area, so it gets out of the way.
                i.e. you click a section, like "home", and it will take you there and make the menu sidebar disappear */}

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="dashboard">Dashboard</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="marketplace">Marketplace</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="cart">Cart</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="settings">Settings</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/ ">Logout</a>
                </li>
            </ul>

        </div>
    )
}
