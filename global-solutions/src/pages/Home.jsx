import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Process from "../components/Process/Process";

function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyChoose/>
        <Process />
        </>
    )
}

export default Home;