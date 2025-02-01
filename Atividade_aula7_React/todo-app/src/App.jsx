import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Importando o AppRoutes.jsx

function App() {
  return (
    <BrowserRouter>
      <h1>Bem-vindo!</h1>
      <ul>
        <li>
          <Link to="/home">Página inicial</Link>
        </li>
        <li>
          <Link to="/about">Sobre mim</Link>
        </li>
        <li>
          <Link to="/services">Meus serviços</Link>
        </li>
        <li>
          <Link to="/contact">Entre em contato</Link>
        </li>
      </ul>

      {/* Renderizando as rotas */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;