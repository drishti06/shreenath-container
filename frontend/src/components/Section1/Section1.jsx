import Navbar from "./Navbar/Navbar"
import "./Section1.css"
import cargo from "../../images/cargo.png"

function Section1() {
    return (
        <div className="section1">
            <Navbar />
            <div style={{ height: '7rem' }}></div>
            <div className="pink-div">
                <h1 className="for-seo">Shreenath <br />containers <br /> movement <br /> pvt ltd</h1>
                {/* <span className="try">Just trying</span> */}
                <div className="contents">
                    <div className="cargo-img">
                        <img src={cargo} alt="" />
                    </div>
                    <div>
                        <span className="bg-text">Your Trust<span className="hide">ed</span></span>
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                            <span className="primary">Partner in</span>
                            <span className="secondary">Transport Industry.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1