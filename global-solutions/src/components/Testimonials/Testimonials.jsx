import TestimonialCard from "./TestimonialCard";
import TestimonialsData from "./TestimonialsData";

function Testimonials(){
    return(
        <section className="bg-[#10243f] py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-400 uppercase tracking-widest font-semibold">
                            Depoimentos
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                            Empresas que confiam na Global
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TestimonialsData.map((item)=>(
                            <TestimonialCard 
                            key={item.id}
                            initials={item.initials}
                            name={item.name}
                            role={item.role}
                            testimonial={item.testimonial}
                            rating={item.rating}
                            />
                        ))}
                </div>

            </div>

        </section>
    );
}

export default Testimonials;