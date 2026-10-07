import { useState } from "react";

const estadoInicial = { username: "", fullname: "", age: "" };

function UserForm({ onSubmit }) {
  const [datos, setDatos] = useState(estadoInicial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copia = { ...datos };
    copia[name] = value;
    setDatos(copia);
  };

  const handleSubmit = (e) => {
    onSubmit?.({ ...datos, age: Number(datos.age) });
    setDatos(estadoInicial);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        type="text"
        value={datos.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="fullname">FullName:</label>
      <input
        id="fullname"
        name="fullname"
        type="text"
        value={datos.fullname}
        onChange={handleChange}
        required
      />

      <label htmlFor="age">Age:</label>
      <input
        id="age"
        name="age"
        type="number"
        min="0"
        max="120"
        value={datos.age}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
