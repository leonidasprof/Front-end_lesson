import "./CartaoDeVisita.css";
import minhaFoto from "./assets/leonidas.png";
import icon from "./assets/icon.svg";

function App() {
  return (
    //Conteiner Principal
    <div className="container">
      <img src={minhaFoto} alt="Foto de Perfil" className="foto"/>
    
      {/* Blobs */}
      <div className="blob"></div>
      <div className="blob5"></div>

      {/* Retângulo 90 (foto ou imagem de capa) */}
      <div className="rect90"></div>

      {/* Retângulo 91 (fundo branco do texto) */}
      <div className="rect91"></div>

      {/* Nome principal */}
      <div className="nome">Leônidas Leandro</div>

      {/* Subtítulo */}
      <div className="funcao">Gestor | Instrutor Tech | Design </div>

      {/* Botão */}
      <button
        className="button"
        onClick={() => window.open("https://www.linkedin.com/in/leonidasprof/", "_blank")}
      >
        <img src={icon} alt="Ícone" className="icon" />
        <div className="text">LinkedIn</div>
      </button>

      {/* Retângulo 93 (faixa inferior) */}
      <div className="rect93"></div>

      {/* Agrupamento de textos (About, Interests e descrições) */}
      <div className="textGroup">
        <div className="about">Sobre</div>
        <div className="aboutDescription">
        Profissional com 24 anos de experiência em tecnologia e educação. 
        Especialista em treinamentos, análise de dados e IA aplicada. Transformo 
        desafios em soluções estratégicas e inovação.
        </div>

        <div className="interests">Interesses</div>
        <div className="interestsDescription">
          Rock'n Roll | Churrasco | Caldinho | Estudar | arte
          Viagem | Amigos | Carros | Tecnologia

        </div>
      
      {/* Copyright */}
      <div className="copyright">
        © Todos os direitos reservados
      </div>

    </div>
  </div>
  )
}

export default App
