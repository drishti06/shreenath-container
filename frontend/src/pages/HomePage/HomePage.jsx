import Clients from "../../components/Clients/Clients"
import Commitments from "../../components/Commitments/Commitments"
import Footer from "../../components/Footer/Footer"
import Section1 from "../../components/Section1/Section1"
import Section2 from "../../components/Section2/Section2"
import Section3 from "../../components/Section3/Section3"
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Commitments />
            <Section2 />
            <Clients />
            <Section3 />
            <Footer />
        </>
    )
}

export default HomePage
