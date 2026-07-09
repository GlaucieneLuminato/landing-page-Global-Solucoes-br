function CompanyCard({name, logo}) {
   return(
    <div className="flex items-center justify-center flex-shrink-0 px-10">
        <img 
        src={logo}
        alt={name}
        className="h-12 object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
        />
    </div>
   );
    
}

export default CompanyCard;