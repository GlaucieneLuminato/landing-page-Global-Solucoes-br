import statsData from "./statsData";



function Stats(){
    return(
        <section className="-mt-20 relative z-20 py-10">

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white rounded-3xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
                    {statsData.map((item)=>{
                        const Icon = item.icon;
                        return(
                        
                        <div key={item.id} className="py-14 px-6 text-center border-b lg:border-b-0 lg-border-r last:border-r-0 border-gray-100">
                            <Icon 
                            size={42}
                            strokeWidth={1.8}
                            className="mx-auto mb-4 text-[#0f5ba8]"
                            
                            />
                            <h3 className="text-6xl font-bold text-[#0f5ba8] ">
                                    {item.prefix}
                                    {item.number}
                                    {item.suffix}
                            </h3>

                            <p className="mt-3 text-gray-700 font-semibold">
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