import Navbar from "./Navbar/Navbar"
import "./Section1.css"
import cargo from "../../images/cargo.png"
function Section1() {
    return (
        <div className="container section1">
            <Navbar />
            <span className="for-seo">Shreenath containers movement pvt ltd</span>
            <div className="section1-main">
                <div className="main">
                    <div className="contents">
                        <div className="cargo-img">
                            <img src={cargo} alt="" />
                        </div>
                        <div>
                            <span>Your Trusted</span>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                                <span className="primary">Partner in</span>
                                <span className="secondary">Transport Industry.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1