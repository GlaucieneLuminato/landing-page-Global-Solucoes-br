import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";


function Services() {
    return(
        <section id="services" className="py-28 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-[#0f5Ba8] font-semibold uppercase tracking-widest">
                            Nossos Serviços
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Soluções completas para sua empresa
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
                        Atuamos com Medicina Ocupacional e Saúde e Segurança do Trabalho, oferecemos soluções completas para empresas de todos os portes.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {servicesData.map((service)=>(
                            <ServiceCard 
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}/>
                        ))}
                </div>


            </div>

        </section>
    );
}

export default Services;
