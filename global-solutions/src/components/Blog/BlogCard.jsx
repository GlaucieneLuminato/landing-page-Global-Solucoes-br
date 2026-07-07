import {ArrowRight} from "lucide-react";


function BlogCard({image, category, date, title, description, link}) {
    return(
        <article className=" flex flex-col h-full group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="overflow-hidden ">
                <img 
                src={image}
                alt={title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                            {category}
                    </span>

                    <span className="text-slate-500 text-sm">
                            {date}
                    </span>

                </div>

                <h3 className=" min-h-[160px] text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                </h3>

                <p className="text-slate-600 leading-7 mb-5 min-h-[96px]">
                        {description}
                </p>

                <a          
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex items-center gap-2  text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                            Ler Artigo 
                            <ArrowRight size={18}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                </a>

            </div>

        </article>
    );
}


export default BlogCard;