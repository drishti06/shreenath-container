import AboutCEO from "../../components/AboutCEO/AboutCEO"
import AboutUs from "../../components/AboutUs/AboutUs"
import Clients from "../../components/Clients/Clients"
import Commitments from "../../components/Commitements/Commitments"
import Footer from "../../components/Footer/Footer"
import Section1 from "../../components/Section1/Section1"
import Section2 from "../../components/Section2/Section2"
import Section3 from "../../components/Section3/Section3"
import WhyUs from "../../components/WhyUs/WhyUs"
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Commitments />
            <AboutUs />
            <AboutCEO />
            <WhyUs />
            <Clients />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}

export default HomePage