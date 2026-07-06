import ProcessCard from "./ProcessCard";
import ProcessData from "./ProcessData";

function Process(){
    return(
        <section className="py-24 bg-slate-50">
            <div className=" mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                                Como Funciona
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
                        Do primeiro contato aos
                        <br/>
                        documentos em 4 passos
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ProcessData.map((item)=>(
                        <ProcessCard 
                        key={item.id}
                        step={item.step}
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

export default Process;