import { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...list, activity];

    setList(newList);
    setActivity("");
  };

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <>
      <h1>O que há para fazer hoje?</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="activity"
          value={activity}
          onChange={handleChange}
          placeholder="Digite uma atividade"
          required
        />
        <button>Adicionar</button>
      </form>
      {list.length === 0 && <h2>Cadastre uma atividade</h2>}
      <ol>
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ol>
    </>
  );
}

export default TodoList;
