//Função que define um componente React
function ServicesPage({ children }) {
  // Retorna aestrutura jsx para redenrização
  return (
    <div>
      <h1>Meus serviços</h1>
      <p>Esta é a página de serviços.</p>
      {children} {/* Renderiza o TodoList aqui */}
    </div>
  );
}

export default ServicesPage;