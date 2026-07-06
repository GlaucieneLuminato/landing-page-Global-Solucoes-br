function ProcessCard({step, icon: Icon, title, description}) {
    return(
        <div className="group relative bg-white rounded-3xl border border-slate-200 p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <span className="text-6xl font-extrabold text-blue-400 group-hover:text-blue-100 transition-colors duration-300">
                    {step}
            </span>

            <div className="w-14 h-14 mt-4 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Icon className="w-7 h-7 text-blue-600" />
                
            </div> 

            <h3 className="mt-8 text-2xl font-bold text-slate-800">
                    {title}
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
                {description}
            </p>

        </div>
    );
}

export default ProcessCard;