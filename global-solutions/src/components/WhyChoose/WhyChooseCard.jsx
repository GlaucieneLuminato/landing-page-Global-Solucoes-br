
function WhyChooseCard({icon: Icon, title, description}) {
    return(
        <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-blue-600"/>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mg-4">
                    {title}
            </h3>

            <p className="text-slate-600 leading-7">
                {description}   
            </p>

        </div>
    );
}

export default WhyChooseCard;