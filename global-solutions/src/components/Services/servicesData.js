import {Stethoscope, ClipboardList, ShieldCheck, FileText, HeartPulse, BriefcaseBusiness} from "lucide-react";

const servicesData = [
    {
        id:1,
        title:"Medicina Ocupacional",
        description:"Gestão completa da saúde ocupacional para empresas de todos os portes.",
        icon:Stethoscope,
        image:"/images/services/medi.trab.png"
    },
    {
        id:2,
        title:"PCMSO",
        description:"Programa de Controle Médico de Saúde Ocupacional conforme a legislação.",
         icon:ClipboardList,
         image:"/images/services/pcmso.png"
    },
    {
        id:3,
        title:"PGR",
        description:"Gerenciamento de riscos ocupacionais com foco em prevenção.",
         icon:ShieldCheck,
         image:"/images/services/pgr.webp"
    },
    {
        id:4,
        title:"LTCAT",
        description:"Laudo Técnico das Condições Ambientais do Trabalho.",
        icon:FileText,
        image:"/images/services/ltcat.png"
    },
    {
        id:5,
        title:"ASO",
        description:"Emissão de Atestado de Saúde Ocupacional para seus colaboradores.",
         icon:HeartPulse,
         image:"/images/services/aso.webp"
    },
    {    
        id:6,
        title:"Consultoria SST",
        description:"Consultoria Especializada em Saúde e Segurança do Trabalho",
        icon:BriefcaseBusiness,
        image:"/images/services/sst.webp"
    },
];

export default servicesData;

