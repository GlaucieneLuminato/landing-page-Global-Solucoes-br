import FAQCard from "./FAQCard";
import faqData from "./FAQData";

function FAQ(){
    return(
        <section className="bg-[#1e293b] py-24" data-aos="fade-up">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold ">
                                FAQ
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                            Perguntas Frequentes
                    </h2>

                </div>

                <div className="spacce-y-5">
                        {faqData.map((item)=>(
                            <FAQCard 
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            
                            />
                        ))}
                </div>

            </div>


        </section>
    );
}

export default FAQ;