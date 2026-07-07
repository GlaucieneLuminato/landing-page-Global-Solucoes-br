import {useState} from "react"
import {Plus, X} from "lucide-react"

function FAQCard({question, answer}) {
    const [open, setOpen] = useState(false);

    return(
        <div className="bg-[#161616] border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300">
            <button onClick={()=> setOpen(!open)}  
            className="w-full flex items-center justify-between p-6 text-left">

                <h3 className="text-lg font-semibold text-white">
                        {question}
                </h3>

                {open ? (
                    <X className="w-6 h-6 text-white"/>
                ): (
                    <Plus className="w-6 h-6 text-white"/>
                )}

            </button>

            {open && (
                <div className="px-6 pb-6">
                    <p className="text-slate-400 leading-7">
                        {answer}
                    </p>

                </div>
            )}

        </div>
    );
}

export default FAQCard;