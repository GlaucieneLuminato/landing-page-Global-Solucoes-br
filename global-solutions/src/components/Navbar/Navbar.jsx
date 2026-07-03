import navLinks from './navLinks';
import {Menu, MessageCircle} from "lucide-react";
import logo from "../../assets/images/logo.jpeg";

function Navbar(){
    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-sm">
            <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                    src={logo}
                    alt="Logo Global Soluções BR"
                    className="w-12 h-12 object-contain rounded-full"
                    />

                  
                </div>

                <nav className="hidden lg:flex items-center gap-10">
                   {navLinks.map((link) =>(
                    <a key={link.id} href={link.href} className="font-medium text-white hover:text-[#0f5ba8] transition duration-300">
                        {link.title}
                    </a>
                   ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-6 py-3 border-2 border-[#0f5ba8] rounded-full text-[#0f5ba8] font-semibold hover:bg-[#0f5ba8] hover:text-white transition-all duration-300">
                            Solicitar Orçamento
                    </button>

                    <button className="flex items-center gap-2 px-6 py-3 bg-[#25d366] rounded-full text-white font-semibold hover:scale-105 transition-all duration-300">
                        <MessageCircle size={20}/>
                        WhatsApp
                    </button>
                </div>

                <button className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full border border-gray-300">
                    <Menu size={26}/>
                </button>

            </div>

        </header>

    );


}

export default Navbar;