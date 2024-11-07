import './index.css';
import logo from './assets/logo.svg';
import heroIMG from './assets/heroIMG.png';
import ProfileCard from './components/ProfileCard';
import React, { useState, useRef } from 'react';

// import dos mentores
import AndreFortuna from './assets/André_Fortuna.jpeg';
import AndreNahas from './assets/André_Nahas.jpg';
import CamilaGiuberti from './assets/Camila_Giuberti_de_Souza.jpg'
import DanielLopes from './assets/Daniel_Lopes.jpg'
import FabricioN from './assets/Fabricio_N..jpeg'
import FelipeRamaldades from './assets/Felipe_Ramaldes_Corrêa.jpg'
import FernandaCesar from './assets/Fernanda_César_Alves.jpg'
import FlavioGoncales from './assets/Flavio_Gonçalves_Maciel_de_Figueiredo.jpg'
import FredericoComerio from './assets/Frederico_Comério.jpg'
import GabrielBylaardt from './assets/Gabriel_Bylaardt_Meira_Rodrigues.jpg'
import GustavoLima from './assets/Gustavo_Lima_Corrêa.jpg'
import IsaacWalker from './assets/Isaac_Walker_de_Abreu.jpg'
import LeandroCarlos from './assets/Leandro_Carlos_Santos.jpg'
import LuanaBontempo from './assets/Luana_Bontempo.jpg'
import MarciaAndrade from './assets/Marcia_Andrade.jpg'
import MurilloVasconcelos from './assets/Murillo_Vasconcelos_Henriques.jpg'
import PollyanaRocha from './assets/Pollyanna_Rocha_Vila_Nova.jpg'
import ReneFerreira from './assets/Rene_Ferreira_de_Oliveira_Neto.jpg'
import RogerioAraujo from './assets/Rogério_Araujo.jpeg'
import SamilaSantana from './assets/Samila_Santana.jpeg'
import ThaisTebaldi from './assets/Thais_Tebaldi_Caser.jpg'
import VaniaGoulart from './assets/Vânia_Goulart.jpg'


export default function App() {
  const [selectedArea, setSelectedArea] = useState("");
  const mentorsRef = useRef(null);

  const mentors = [
    {
      image: AndreFortuna,
      name: "André Fortuna",
      title: "Negocio - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: AndreNahas,
      name: "André Nahas",
      title: "Empreendedorismo",
      linkedinUrl: "https://www.linkedin.com/in/andrenahas/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"

    },
    {
      image: CamilaGiuberti,
      name: "Camila Giuberti",
      title: "Farmácia",
      linkedinUrl: "https://www.linkedin.com/in/camilagiuberti/"
    },
    {
      image: DanielLopes,
      name: "Daniel Lopes",
      title: "Negocio - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/almeidalopes/"
    },
    {
      image: FabricioN,
      name: "Fabricio Norbim",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/fabricionorbim/"
    },
    {
      image: FelipeRamaldades,
      name: "Felipe Ramaldes Corrêa",
      title: "Consultoria",
      linkedinUrl: "https://www.linkedin.com/in/felipe-ramaldes-corr%C3%AAa-783315129/"
    },
    {
      image: FernandaCesar,
      name: "Fernanda César Alves",
      title: "Consultoria",
      linkedinUrl: "https://www.linkedin.com/in/fernanda-cesar/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
    },
    {
      image: FlavioGoncales,
      name: "Flavio Gonçalves",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/fl%C3%A1vio-figueiredo-04263250/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
    },
    {
      image: FredericoComerio,
      name: "Frederico Comério",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/frederico-comerio/"
    },
    {
      image: GabrielBylaardt,
      name: "Gabriel Bylaardt",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/gbmeira/" 
    },
    {
      image: GustavoLima,
      name: "Gustavo Lima",
      title: "Mercado Financeiro",
      linkedinUrl: "https://open.substack.com/pub/gustavolcorrea/p/pequenas-mudancas-grandes-impactos?r=2nkoa0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" 
    },
    {
      image: IsaacWalker,
      name: "Isaac Walker",
      title: "Medicina",
      linkedinUrl: "https://www.linkedin.com/in/isaac-abreu-43841b30/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: LeandroCarlos,
      name: "Leandro Carlos",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/leandro-carlos-ribeiro-dos-santos/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: LuanaBontempo,
      name: "Luana Bontempo e Silva",
      title: "Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/luana-bontempo/" 
    },
    {
      image: MarciaAndrade,
      name: "Marcia Andrade",
      title: "Arquitetura",
      linkedinUrl: "https://www.econodata.com.br/contato/marcia-andrade-paoliello-1ae3d6fe8797ae2e5e3bd6f80d6875c6" 
    },    
    {
      image: PollyanaRocha,
      name: "Pollyanna Rocha",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/pollyannavilanovarh/" 
    },
    {
      image: ReneFerreira,
      name: "Rene Ferreira",
      title: "Negócios - Operações",
      linkedinUrl: "https://www.linkedin.com/in/ren%C3%AA-neto-02a035a4/" 
    },
    {
      image: RogerioAraujo,
      name: "Rogerio Martins",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/rogerio-araujo-52431422/?originalSubdomain=br" 
    },
    {
      image: SamilaSantana,
      name: "Samila Santana",
      title: "Medicina",
      linkedinUrl: "https://www.linkedin.com/in/samila-santana-37297aa9/" 
    },
    {
      image: ThaisTebaldi,
      name: "Thais Tebaldi",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/andrefortuna/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: VaniaGoulart,
      name: "Vânia Goulart",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/vaniagoulart/" 
    },
  ];

  const filteredMentors = selectedArea
    ? mentors.filter((mentor) => mentor.title === selectedArea)
    : mentors;

  const handleScrollToMentors = () => {
    mentorsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="w-full bg-white my-1 mx-1 flex justify-between shadow-md">
        <img src={logo} className="items-start max-w-40"/>
        <div className="flex items-center">
          <a href="https://www.institutoponte.org.br" className="mr-4" style={{ color: '#6A6EA0' }}>Sobre</a>
          <button onClick={handleScrollToMentors} className="mr-8" style={{ color: '#6A6EA0', background: 'none', border: 'none', cursor: 'pointer' }}>Mentores</button>
        </div>
      </header>
      <img src={heroIMG} className="w-full"/>
      <div className="text-center py-6 px-6 text-sm" style={{ backgroundColor: '#6A6EA0' }}>
        <h1><b>O programa de mentoria do Instituto Ponte faz parte do programa de formação e desenvolvimento dos alunos do Ensino Superior. A mentoria tem o objetivo de conectar o universitário com um profissional do mercado de trabalho de áreas correlatas que como mentor possa trazer suas experiências e perspectivas sobre a carreira e a atuação nessa área. Buscando assim, que o aluno se sinta mais preparado para o mercado e que tenha boas referências e inspirações para sua trajetória profissional.</b></h1>
      </div>
      <div ref={mentorsRef} className="shadow-md">
        <h1 className='mx-4 text-3xl py-8' style={{color:"#6A6EA0"}}>Mentores:</h1>
      </div>
      
      {/* Main Container */}
      <div className="flex flex-col md:flex-row px-4 pb-8">
        {/* Left Column with Filter and Divider Line */}
        <div className="w-full md:w-1/4 pr-4 border-r border-gray-300 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
            Filtrar por área:
          </label>
          <select 
            id="filter" 
            className="w-full p-2 border rounded shadow"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Negócios">Negócios</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Empreendedorismo">Empreendedorismo</option>
            <option value="Mercado Financeiro">Mercado Financeiro</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Medicina">Medicina</option>
            <option value="Consultoria">Consultoria</option>
            <option value="Arquitetura">Arquitetura</option>
            <option value="Nutrição">Nutrição</option>
            <option value="Operações">Operações</option>
            <option value="Farmácia">Farmácia</option>
          </select>
        </div>

        {/* Right Column with Scrollable Mentor Cards in a Box */}
        <div className="w-full md:w-3/4 pl-0 md:pl-4">
          <div className="border border-gray-300 rounded-lg p-4 h-[500px] overflow-y-auto shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredMentors.map((mentor, index) => (
                <ProfileCard 
                  key={index}
                  image={mentor.image} 
                  name={mentor.name} 
                  title={mentor.title} 
                  linkedinUrl={mentor.linkedinUrl} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
