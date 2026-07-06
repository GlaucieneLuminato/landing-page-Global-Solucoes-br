import {Star} from "lucide-react";

function TestimonialCard({initials, name, role, testimonial, rating}) {
    return(
        <div className=" flex flex-col h-full group bg-slate-50 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all duraion-300">

            <div className="flex gap-1 mb-6">
                {[...Array(rating)].map((_,index)=>(
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>
                ))}

            </div>

            <p className="text-[#161616] leading-8 text-lg mb-8 flex-1">
                    "{testimonial}"
            </p>

            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                    {initials}
                </div>

                <div>
                    <h3 className="text-[#161616] font-semibold text-lg">
                        {name}
                    </h3>

                    <span className="text-slate-400 text-sm">
                        {role}  
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;