function ServiceCard({icon: Icon, title, description}) {
    return(
        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mg-6 group-hover:bg-[#0f5ba8] transition-all">
                <Icon 
                size={34}
                className="text-[#0f5ba8] group-hover:text-white transition-all"
                
                />

            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
            </h3>

            <p className="text-gray-600 leading-7">
                {description}
            </p>

            <button className="mt-6 text-[#0f5ba8] font-semibold hover:translate-x-2 transition-all">
                        Saiba Mais
            </button>


        </div>
    );
}

export default ServiceCard;