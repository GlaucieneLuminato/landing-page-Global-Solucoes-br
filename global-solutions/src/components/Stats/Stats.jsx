import statsData from "./statsData";



function Stats(){
    return(
        <section className="-mt-6 lg:-mt-20 relative z-20" data-aos="zoom-in">

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white rounded-3xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
                    {statsData.map((item)=>{
                        const Icon = item.icon;
                        return(
                        
                        <div key={item.id} className="py-8 px-4 sm:py-10 sm:px-6 lg:py-14 lg:px-6 text-center border-b lg:border-b-0 lg:border-r last:border-r-0 border-gray-100">
                            <Icon 
                            size={36}
                            strokeWidth={1.8}
                            className="mx-auto mb-4 text-[#0f5ba8]"
                            
                            />
                            <h3 className=" text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0f5ba8] ">
                                    {item.prefix}
                                    {item.number}
                                    {item.suffix}
                            </h3>

                            <p className="mt-3 text-gray-700 font-semibold text-sm sm:text-base">
                                {item.title}
                            </p>

                        </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}

export default Stats;