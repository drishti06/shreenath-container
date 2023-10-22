import "./AboutUs.css"
import MsmeCertificate from "../../images/MSME-certificate.png";
import MsmeTrophy from "../../images/MSME-trophy.png"

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="about-us">
                <span>About Us</span>
                <p>Shreenath Containers Movement Pvt Ltd is a well-established transport and logistics firm based in Navi Mumbai, India. Since our inception in 2005, we've been dedicated to providing efficient and reliable transportation solutions to a wide range of clients, with a particular focus on the paper industry.</p>
                <div className="awards">
                    <div className="about-us-left">
                        <p>Proudly received the National MSME (Micro, Small, and Medium Enterprises) Award for its outstanding contribution in the realm of quality and excellence. This prestigious award acknowledges our unwavering commitment to providing top-notch transportation solutions and our dedication to maintaining the highest standards of customer satisfaction.</p>
                        <br />
                        <p>We are honored to be recognized by the India 5000 Best MSME Awards for our exceptional contributions. This certificate acknowledges our outstanding impact on society through our services and management, which have not only boosted our growth but have also positively influenced the industry and the communities we serve. We take great pride in this recognition as it reflects our commitment to excellence and our continuous efforts to uphold the highest standards in all aspects of our business.</p>
                    </div>
                    <div className="about-us-right">
                        <img src={MsmeTrophy} className="trophy" />
                        <img src={MsmeCertificate} className="certif" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs