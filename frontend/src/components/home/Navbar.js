import Location from "../locations/Location";
import Home from "./Home";
import Search from "./Search";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="head">GoaDest</div>
            <div className="links">
            <a href={`/`}>Home</a>        
                <a href={`/LocationS`}>Location</a>
                <a href={`/Maps`}>Maps</a>
            </div>
                
          
        </nav>
    );
}
   
export default Navbar;