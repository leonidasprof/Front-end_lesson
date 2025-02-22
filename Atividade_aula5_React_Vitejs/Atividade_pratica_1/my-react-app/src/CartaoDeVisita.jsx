import "./CartaoDeVisita.css";
import minhaFoto from "./assets/leonidas.png";
import icon from "./assets/icon.svg";

function CartaoDeVisita() {
  return (
    // Container principal
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
      <div className="nome">Igor Nicholai</div>

      {/* Subtítulo */}
      <div className="funcao">Frontend Developer</div>
      
      {/* Botão */}
      <button
        className="button"
        onClick={() => window.open("https://www.linkedin.com/in/igor-nicholai-alencar/", "_blank")}
      >
        <img src={icon} alt="Ícone" className="icon" />
        <div className="text">LinkedIn</div>
      </button>
      
      {/* Retângulo 93 (faixa inferior) */}
      <div className="rect93"></div>

      {/* Agrupamento de textos (About, Interests e descrições) */}
      <div className="textGroup">
        <div className="about">About</div>
        <div className="aboutDescription">
          I am a frontend developer with a particular interest in making things 
          simple and automating daily tasks. I try to keep up with security 
          and best practices, and am always looking for new things to learn.
        </div>
        
        <div className="interests">Interests</div>
        <div className="interestsDescription">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        © Todos os direitos reservados
      </div>
    </div>
  );
}

export default CartaoDeVisita;