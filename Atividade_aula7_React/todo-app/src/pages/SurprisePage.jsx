import { useNavigate } from 'react-router-dom'; // Importando useNavigate

function SurprisePage() {
  const navigate = useNavigate(); // Usando useNavigate para redirecionamento

  const handleGoBack = () => {
    navigate('/home'); // Redireciona para a HomePage
  };

  return (
    <div>
      <h1>Surpresa!</h1>
      <p>Você clicou 5 vezes no botão da Home Page. 🎉</p>
      <button onClick={handleGoBack}>Voltar</button> {/* Botão para voltar */}
    </div>
  );
}

export default SurprisePage;
  