import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import Companies from "../components/Companies/Companies";
import Blog from "../components/Blog/Blog";

function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyChoose/>
        <Process />
        <Testimonials />
        <Companies />
        <Blog />
        </>
    )
}

export default Home;