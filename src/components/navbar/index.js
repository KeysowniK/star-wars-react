import { Logo } from "../../assets";
import "./index.css"

function Navbar() {
    return (
        <nav>
            <img class="logo" src={Logo} alt="logo" />
        </nav>
    )
}

export default Navbar;