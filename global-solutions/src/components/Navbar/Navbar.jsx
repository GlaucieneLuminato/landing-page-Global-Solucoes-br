import { useState} from "react";
import navLinks from './navLinks';
import {Menu, MessageCircle, X} from "lucide-react";
import logo from "../../assets/images/logo.jpeg";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
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

                <button 
                aria-label="Abrir menu de navegação"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={()=>setMenuOpen(true)}
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full border border-gray-300">
                    <Menu size={26}/>
                </button>

            </div>

        </header>

        {menuOpen && (
            <div 
            onClick={()=>setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
            />
        )}

        <aside id="mobile-menu" className={`fixed top-0 right-0 h-screen w-80 bg-[#0f5ba8] z-50 shadow-2xlbntransform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="h-full flex flex-col p-8">
                <div className="flex items-center justify-between mb-12">
                        <img
                        src={logo}
                        alt="Logo Global Soluções BR"
                        className="w-14 h-14 rounded-full"
                        />

                        <button 
                        aria-label="Fechar menu"
                        onClick={()=>setMenuOpen(false)}
                        className="text-white">
                            <X size={30} />
                        </button>
                </div>

                <nav className="flex flex-col gap-7">
                    {navLinks.map((link)=>(
                        <a 
                        key={link.id}
                        href={link.href}
                        onClick={()=>setMenuOpen(false)}
                        className="text-white text-lg font-medium hover:translate-x-2 transition-all duration-300"
                        >
                                {link.title}
                        </a>
                    ))}

                </nav>

                <div className="mt-auto flex flex-col gap-4">
                    <button
                    aria-label="Solicitar Orçamento"
                    className="w-full py-4 rounded-full bg-white text-[#0f5ba8] font-medium hover:scale-105 transition-all duration-300"
                    >
                                Solicitar Orçamento
                    </button>

                    <button>
                        <a
                            href="https://wa.me/5521968401903"
                            target="_blank"
                            aria-label="Entrar em contato pelo Whatsapp"
                            className="w-full py-4 rounded-full bg-[#25d366] text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 "
                        >
                                WhatsApp
                        </a>
                       
                    </button>

                </div>

            </div>
        </aside>
        </>

    );


}

export default Navbar;