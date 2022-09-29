import NavMenu from "./menu";
import "./Navbar.css"

const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="navmenu">
                <NavMenu/>
                 
            </div>
            <div>
                <div>ENGLISH | தமிழ் | বাংলা | മലയാളം | हिंदी | मराठी</div>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="Inian express logo (https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg)" /><br />
                <b>JOURNALISM OF COURAGE</b>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar;