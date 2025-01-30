import React from 'react';
import { Mail, Github, Linkedin, Instagram, Music, Coffee, Book, Globe, Palette } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-700 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-sm w-full">
        {/* Cabeçalho */}
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-500"></div>
          <img 
            src="cabecalho.png?auto=format&fit=crop&w=800&q=80"
            alt="Profile background"
            className="w-full h-full object-cover opacity-100 mix-blend-overlay"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
              <img 
                src="leonidas.png?auto=format&fit=crop&w=200&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Perfil */}
        <div className="pt-10 pb-6 px-6 text-center"><br></br>
        <p><h2 className="text-2xl font-semibold text-purple-600">Leônidas Leandro</h2></p>

          <p className="text-gray-400 font-medium">Instrutor de Tech Aplicada | Apaixonado por Tech Educacional | Gestor de TI | Consultor Tech | Criativo | Inovador em Soluções Digitais | Designer | Futuro Product Manager Especialista em A.I. 

          </p>
          
          {/* Contatos */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:lls@cesar.scholl">
              <button className="p-2 text-purple-400 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </button>
            </a>
            <a href="https://www.instagram.com/prof.tenebroso/" target="_blank" rel="noopener noreferrer">
              <button className="p-2 text-purple-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </button>
            </a>
            <a href="https://github.com/leonidasprof" target="_blank" rel="noopener noreferrer">
              <button className="p-2 text-purple-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/leonidasprof" target="_blank" rel="noopener noreferrer">
              <button className="p-2 text-purple-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </button>
            </a>
          </div>

          {/* Perfil */}
          <div className="mt-6">
            <h4 className="font-semibold text-white mb-2">Perfil Profissional</h4>
            <p className="text-gray-400 text-sm">
              Atuo há 24 anos transformando desafios em soluções criativas e inovadoras com T.I.C.
               - Especialista em tecnologia e educação, com experiência em gestão, 
              treinamentos, análises de dados e IA. 
            </p>
          </div>

          {/* Interesses */}
          <div className="mt-6">
            <h3 className="font-semibold text-white mb-3">Paixões</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { icon: Music, label: "Rock'n Roll" },
                { icon: Coffee, label: 'Café' },
                { icon: Book, label: 'Estudar' },
                { icon: Globe, label: 'Conhecimentos Gerais' },
                { icon: Palette, label: 'Design' }
              ].map((interest, index) => (
                <div key={index} className="flex items-center gap-1 bg-purple-900 text-purple-100 px-3 py-1 rounded-full text-sm">
                  <interest.icon size={14} />
                  <span>{interest.label}</span>
            </div>
                         
         
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;