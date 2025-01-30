function HelloWorld(props) {
    const { color = "red", name, children } = props;
    //atribui os parametros na constante
    
    const h2Style = {
      color: color,
      fontSize: 50
    };
  
    return (
      <>
        <h1 style={{ color: "blue" }}>Hello, {name}!</h1>
        <h2 style={h2Style}>{children}</h2>
      </>
    );
  }
  
  export default HelloWorld