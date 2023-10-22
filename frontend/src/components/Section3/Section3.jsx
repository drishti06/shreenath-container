import './Section3.css'
import hii from "../../images/waving-hand.png"
import map from "../../images/map.png"
function Section3() {
    return (
        <div className="container" id='section3'>
            <div className='section3'>
                <div className="section3-left">
                    <div>
                        <span>Get in touch <img src={hii} alt="" /></span>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7304135751583!2d73.0040720750763!3d19.075586982128865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1386ad958f1%3A0x58f2fc00ce7c9a51!2sShreenath%20Containers%20Movement%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1697909928740!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Section3