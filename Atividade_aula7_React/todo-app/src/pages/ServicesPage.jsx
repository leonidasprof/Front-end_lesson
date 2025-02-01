function ServicesPage({ children }) {
  return (
    <div>
      <h1>Meus serviços</h1>
      <p>Esta é a página de serviços.</p>
      {children} {/* Renderiza o TodoList aqui */}
    </div>
  );
}

export default ServicesPage;