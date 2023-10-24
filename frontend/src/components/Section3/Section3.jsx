import './Section3.css';
import hii from "../../images/waving-hand.png";
import { useState } from 'react';
import axios from "axios";

function Section3() {
    const [mailRes, setMailRes] = useState('');
    const [isButtonVisible, setButtonVisibility] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    };

    const isPhoneValid = (phone) => {
        const phonePattern = /^[+]?[0-9]{1,4}?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
        return phonePattern.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isEmailValid(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isPhoneValid(formData.phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        setButtonVisibility(false);

        axios
            .post('http://localhost:8080/sendEmail', formData)
            .then((response) => {
                const data = response.data;
                setMailRes(data);
                setButtonVisibility(true);

                setTimeout(() => {
                    setMailRes("");
                }, 5000);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setButtonVisibility(true);
            });
    };

    return (
        <div className='section3' id='section3'>
            <div className="section3-left">
                <div>
                    <span>Get in touch <img src={hii} style={{ width: 'clamp(20px, 5vw, 50px)' }} /></span>
                    <span>We'll do our best to respond within 1-2 working days.</span>
                </div>
                <div className="form">
                    <form noValidate onSubmit={handleSubmit}>
                        <input type="text" placeholder='your name (eg. John Doe)' name="name" value={formData.name} onChange={handleChange} />
                        <input type="email" placeholder='your email (eg. xyz@example.com)' name="email" value={formData.email} onChange={handleChange} />
                        <input type="text" placeholder='phone number (eg. +91 (1234) 567-890)' name="phone" value={formData.phone} onChange={handleChange} />
                        <textarea name="message" cols="30" rows="7" placeholder='your message' value={formData.message} onChange={handleChange}></textarea>
                        {isButtonVisible && (
                            <button type="submit">Send Message</button>
                        )}

                    </form>
                </div>
            </div>
            <div className="section3-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7304135751583!2d73.0040720750763!3d19.075586982128865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1386ad958f1%3A0x58f2fc00ce7c9a51!2sShreenath%20Containers%20Movement%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1697909928740!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Section3;
