import {ArrowRight, MessageCircle} from "lucide-react"

function CTA() {
    return(
        <section className="bg-slate-50 py-24" id="contato" data-aos="zoom-in">
         <div className="max-w-7xl mx-auto px-6">
             <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-10 md:p-16 text-center">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                        Entre em Contato
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Pronto para transformar a saúde ocupacional da sua empresa ?
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
                    Conte com uma equipe especializada em Medicina e Segunça do Trabalho 
                    para manter sua empresa em conformidade com a legislação, proteger seus 
                    colaboradores e garantir processos mais seguros e eficientes.

                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

                    <a 
                    href="https://wa.me/5521968401903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                        Solicitar uma Proposta
                        <ArrowRight size={20}/>
                    </a>

                    <a
                    href="https://wa.me/5521968401903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"                    
                    >
                        <MessageCircle size={20}/>
                        Falar no WhatsApp
                    </a>

                </div>



            </div>

         </div>

        </section>
    );
}

export default CTA;