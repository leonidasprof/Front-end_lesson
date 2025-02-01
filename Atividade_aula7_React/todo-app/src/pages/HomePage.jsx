import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate

function HomePage() {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate(); // Usando useNavigate para redirecionamento

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      navigate('/surprise'); // Redireciona para a página SurprisePage após 5 cliques
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>
        {clickCount === 0 ? 'Clique aqui' : `Você clicou ${clickCount} vezes`}
      </button>
    </div>
  );
}

export default HomePage;
