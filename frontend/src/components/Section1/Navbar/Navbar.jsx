import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import logo from "../../../images/logo.png"
import "./Navbar.css"
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("navbar").classList.remove("hide");
                document.getElementById("navbar").classList.add("show");
            } else {
                document.getElementById("navbar").classList.remove("show");
                document.getElementById("navbar").classList.add("hide");
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className="show" id="navbar">
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
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        duration={2000}
                        style={{ cursor: 'pointer', color: 'white' }}
                    >
                        CONTACT US
                    </Link>
                    <HiOutlineArrowNarrowRight style={{ color: 'white', fontSize: '1rem' }} />
                </div>
            </div>
        </nav>
    )
}
export default Navbar