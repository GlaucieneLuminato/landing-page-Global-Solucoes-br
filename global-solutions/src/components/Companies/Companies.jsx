import CompanyCard from "./CompaniesCard";
import companyData from "./CompaniesData";

function Company(){
    return(
        <section className="bg-slate-50 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <span className="text-blue-600 uppercase tracking-[0.25em] font-semibold text-sm">
                                Empresas Atendidas
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-slate-800">
                            Empresas que confiam na Global
                    </h2>

                </div>

                <div className="overflow-hidden relative">

                    <div className="absolute left-0 top-0 h-full w-24 bg-gradiente-to-r from-slate-50 to-transparent z-10"/>
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradiente-to-r from-slate-50 to-transparent z-10"/>
                    
                    <div className="flex w-max animate-marquee gap-16">
                            {[...companyData, ...companyData].map((company, index)=>(
                             <CompanyCard 
                             key={index}
                             logo={company.logo}
                             name={company.name}
                             
                             />
                            ))}
                    </div>

                </div>

            </div>


        </section>
    );
}

export default Company;