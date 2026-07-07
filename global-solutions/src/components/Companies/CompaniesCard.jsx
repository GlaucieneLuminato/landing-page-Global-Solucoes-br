function CompanyCard({name}) {
    return(
        <div className="flex-shrink-0 px-10">
            <h3 className="text-xl font-semibold text-slate-700 whitespace-nowrap transition duration-300 hover:text-blue-600">
                    {name}
            </h3>

        </div>
    );
}

export default CompanyCard;