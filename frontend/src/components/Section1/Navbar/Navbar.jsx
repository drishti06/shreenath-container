import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import logo from "../../../images/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="company-name">
                    <span>Shreenath Containers</span>
                    <span>Movements Pvt. Ltd.</span>
                </div>
            </div>
            <div>
                <div className="contact-btn">
                    <button>CONTACT US</button>
                    <HiOutlineArrowNarrowRight style={{ color: 'white', fontSize: '1rem' }} />
                </div>
            </div>
        </nav>
    )
}
export default Navbar