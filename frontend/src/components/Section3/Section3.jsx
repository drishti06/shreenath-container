import './Section3.css'
import hii from "../../images/waving-hand.png"
import map from "../../images/map.png"
function Section3() {
    return (
        <div id='contact' className="container">
            <div className='section3'>
                <div className="section3-left">
                    <div>
                        <span>Get in touch with us <img src={hii} alt="" /></span>
                        <span>We'll do our best to respond within 1-2 working days.</span>
                    </div>
                    <div className="form">

                        <form noValidate>
                            <input type="text" placeholder='your name (eg. John Doe)' name="name" id="" />
                            <input type="email" placeholder='your email (eg. xyz@example.com)' name="email" id="" />
                            <input type="text" placeholder='phone number (eg. +91 (1234) 567-890)' name="phone" id="" />
                            <textarea name="message" cols="30" rows="14" placeholder='your message'></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="section3-right">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section3