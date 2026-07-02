import heroData from "./heroData";
import heroImage from "../../assets/images/hero-global-solutions.jpeg";

function Hero(){
    return(
        <section id="home" className="min-h-screen flex items-center bg-white pt-24">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <div>
                    <span className="inline-block bg-blue-100 text-[#0f5ba8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        {heroData.badge}
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        {heroData.title}
                    </h1>

                    <p className="text-lg text-gray-600 leading-8 mb-8">
                        {heroData.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href={heroData.primaryButton.link}
                        className="bg-[#0f5ba8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#093e75] transition-all duration-300 text-center">
                                {heroData.secundyButton.text}
                        </a>
                    </div>

                    <div className="flex flex-col gap-3">
                        {heroData.highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">

                               <div 
                               className="w-3 h-3 rounded-full bg-[#0f5ba8]"
                               />
                               <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex justify-center">
                    <img 
                    src={heroImage}
                    alt="Equipe Global Soluções"
                    className="w-full max-w-xl"
                    />
                </div>

            </div>

        </section>
    );
}

export default Hero;