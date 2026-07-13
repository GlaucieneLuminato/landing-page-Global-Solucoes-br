function ServiceCard({ icon: Icon, title, description, image }) {
  return (
    <div
      className="relative h-[340px] rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>

    
      <div className="relative z-10 h-full flex flex-col justify-end p-8">

        
        <div className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0f5ba8]">
          <Icon
            size={34}
            className="text-[#0f5ba8] group-hover:text-white transition-all duration-300"
          />
        </div>

       
        <h3 className="text-3xl font-bold text-white mb-3">
          {title}
        </h3>

       
        <p className="text-slate-200 leading-7">
          {description}
        </p>

       
        <button className="mt-6 text-white font-semibold transition-all duration-300 group-hover:translate-x-2">
          Saiba Mais →
        </button>

      </div>
    </div>
  );
}

export default ServiceCard;