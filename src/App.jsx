import { useState } from "react";
import UserForm from "./components/UserForm.jsx";

function App() {
  const [valor, setValor] = useState("");
  const [usuario, setUsuario] = useState(null);

  const numero = Number(valor);
  const progreso = Number.isNaN(numero) ? 0 : Math.min(100, Math.max(0, numero));

  return (
    <main className="contenedor">

      <h2>Formulario</h2>
      <UserForm onSubmit={setUsuario} />

      {usuario && (
        <pre>{JSON.stringify(usuario, null, 2)}</pre>
      )}
    </main>
  );
}

export default App;
