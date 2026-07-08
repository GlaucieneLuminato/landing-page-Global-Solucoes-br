import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import Companies from "../components/Companies/Companies";
import Blog from "../components/Blog/Blog";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

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
        <FAQ />
        <CTA />
        <Footer />
        </>
    )
}

export default Home;