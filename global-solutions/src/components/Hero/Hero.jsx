import heroData from "./heroData";
import heroImage from "../../assets/images/hero-global-solutions.jpeg";


function Hero(){
    return(
        <section id="home" className=" relative min-h-[90px] lg:min-h-screen flex items-center overflow-hidden" data-aos="fade-up">

            <div 
            className="absolute inset-0 bg-cover bg-[72%_center] lg:bg-center bg-no-repeat"
            style={{
                backgroundImage:`url(${heroImage})`,
            }}

            />

            <div 
            className="absolute inset-0 bg-gradient-to-r from-[#0b4a88]/65 to-black/40"
            
            />

            <div className=" relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

                <div>
                    <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-xl mb-6 pt-28 lg:pt-40">
                        {heroData.title}
                    </h1>
                </div>

                 
            </div>

              

        </section>
    );
}

export default Hero;