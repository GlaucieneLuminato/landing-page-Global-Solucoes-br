import WhyChooseCard from "./WhyChooseCard";
import WhyChooseData from "./WhyChooseData";


function WhyChoose(){
    return(
        <section className="py-24 bg-[#10243f]" id="diferenciais">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">

                <span 
                className="text-blue-600 font-semibold uppercase tracking-widest">
                        Diferenciais
                </span>
                <h2 className="text-4xl font-bold text-center text-white">
                    Por que escolher a Global Soluções ?
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
                        Atuamos com qualidade, rapidez e conformidade legal, oferecendo soluções completas para empresas de todos os portes.
                </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WhyChooseData.map((item)=> (
                        <WhyChooseCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        />
                    ))}
            </div>
            </div>


        </section>
    );
}

export default WhyChoose;