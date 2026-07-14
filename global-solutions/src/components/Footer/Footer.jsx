import {
  MapPin,
  Phone,
  MailIcon,
  HeartIcon,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import {FaLinkedin} from "react-icons/fa";
import logo from "../../assets/images/logo.jpeg";

function Footer() {
  return (
    <footer id="contato" className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        

          <div>

            <img
              src={logo}
              alt="Global Soluções"
              className="w-16 h-16 rounded-full mb-6"
            />

            <p className="text-slate-300 leading-8">
              Especialistas em Medicina e Segurança do Trabalho,
              oferecendo soluções completas para empresas de todos os portes.
            </p>

          </div>

         

          <div>

            <h3 className="text-xl font-bold mb-6">
              Links Rápidos
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Início
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Serviços
                </a>
              </li>

              <li>
                <a href="#blog" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-blue-400 transition">
                  Perguntas Frequentes
                </a>
              </li>

              <li>
                <a href="#contato" className="hover:text-blue-400 transition">
                  Contato
                </a>
              </li>

            </ul>

          </div>

        

          <div>

            <h3 className="text-xl font-bold mb-6">
              Serviços
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>Medicina Ocupacional</li>

              <li>Segurança do Trabalho</li>

              <li>Exames Toxicológicos</li>

              <li>eSocial SST</li>

            </ul>

          </div>

         

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contato
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-blue-400" />

                <span className="text-slate-300">
                  (21) 97016-4316
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MailIcon className="w-5 h-5 text-blue-400" />

                <span className="text-slate-300">
                  comercial@globalsolucoesbr.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="w-5 h-5 text-blue-400" />

                <span className="text-slate-300">
                  Rio de Janeiro - RJ
                </span>

              </div>

            </div>

          

            <div className="mt-8">

              <h4 className="text-lg font-semibold mb-4">
                Redes Sociais
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://www.instagram.com/globalsolucoesbr?igsh=MXkya3RvbDZseXMyYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  < HeartIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/globalsolucoesbr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >

                    <FaLinkedin className="w-5 h-5"/>                 
                </a>

                <a
                  href="https://wa.me/5521968401903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

              </div>

            </div>

          </div>

        </div>

     

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-center md:text-left">
            © 2026 Global Soluções. Todos os direitos reservados.
          </p>

          <a
            href="#home"
            aria-label="Voltar ao início da página"
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;