import "./Commitments.css"
import integrityImg from "../../images/integrity-img.png"
import safetyImg from "../../images/safety-img.png"
import efficiencyImg from "../../images/efficiency-img.png"

function Commitments() {
    return (
        <div className="commitments">
            <div className="commitments-top">
                <span>Our Commitment to</span>
                <span>Integrity, Safety and Efficency</span>
                <span>At Shreenath Containers Movement Pvt Ltd, we prioritize integrity, safety and customer satisfaction in everything we do. Providing efficient and reliable transportation solutions to a wide range of clients. Your cargo is our responsibility, and we take that responsibility seriously.</span>
            </div>
            <div className="commitments-bottom">
                <div className="commitment">
                    <img src={integrityImg} alt="" />
                    <div>
                        <span className="bold">Integrity.</span>
                        <p>We uphold the highest standards of honesty, transparency, and ethical conduct.</p>
                    </div>
                </div>
                <div className="commitment">
                    <img src={safetyImg} alt="" />
                    <div>
                        <span className="bold">Safety.</span>
                        <p>We prioritize the safety of our employees, customers, and the communities we serve.</p>
                    </div>
                </div>
                <div className="commitment">
                    <img src={efficiencyImg} alt="" />
                    <div>
                        <span className="bold">Efficiency.</span>
                        <p>We're dedicated to delivering your cargo on-time, every time, so you can stay ahead.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commitments