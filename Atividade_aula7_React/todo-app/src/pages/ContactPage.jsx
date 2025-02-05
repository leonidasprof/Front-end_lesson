import { useState, useEffect } from 'react';

// Página de Contato com Temporizador e Contagem Regressiva
function ContactPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [seconds, setSeconds] = useState(5); // Estado para contagem regressiva

  useEffect(() => {
    if (seconds === 0) {
      setShowMessage(true);
    } else if (seconds > 0 && showMessage === false) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds, showMessage]);

  const handleStartTimer = () => {
    setShowMessage(false);
    setSeconds(5); // Reinicia a contagem para 5 segundos
  };

  return (
    <>
      <h1>Contact Page</h1>
      <div>
        <h2>Leônidas Leandro</h2>
        <h2>Fone: 81-98291-1207</h2>
      </div>
      <button onClick={handleStartTimer}>Iniciar Temporizador</button>
      {!showMessage && <p>Tempo restante: {seconds} segundos</p>}
      {showMessage && <p>Tempo esgotado!</p>}
    </>
  );
}

export default ContactPage;
