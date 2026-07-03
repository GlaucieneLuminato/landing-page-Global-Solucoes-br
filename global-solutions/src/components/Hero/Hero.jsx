import heroData from "./heroData";
import heroImage from "../../assets/images/hero-global-solutions.jpeg";


function Hero(){
    return(
        <section id="home" className=" relative min-h-screen flex items-center overflow-hidden">

            <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:`url(${heroImage})`,
            }}

            />

            <div 
            className="absolute inset-0 bg-black/45 from-[#0772b53]/90 via-[#0b4a88]/70 to-transparent"
            
            />

            <div className=" relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-xl mb-6 pt-40">
                        {heroData.title}
                    </h1>
                </div>

                 
            </div>

              

        </section>
    );
}

export default Hero;