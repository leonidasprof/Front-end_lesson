import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate

function HomePage() {
  const [clickCount, setClickCount] = useState(0);
  const [step, setStep] = useState(1); // Novo estado para o passo
  const navigate = useNavigate(); // Usando useNavigate para redirecionamento

  const handleClick = (increment) => {
    const newCount = clickCount + increment;
    setClickCount(newCount);

    if (newCount === 5) {
      navigate('/surprise'); // Redireciona para a página SurprisePage após 5 cliques
    }
  };

  return (
    <div>
      <h1>Teste</h1>
      <div>
        <label htmlFor="stepInput">Determine o start: </label>
        <input
          id="stepInput"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <button onClick={() => handleClick(step)}>Aumentar</button>
      <button onClick={() => handleClick(-step)}>Diminuir</button>
      <p>{clickCount === 0 ? 'Resultado' : `Você clicou ${clickCount} vezes`}</p>
    </div>
  );
}

export default HomePage;
