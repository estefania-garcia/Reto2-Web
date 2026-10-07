import { useState } from "react";
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
  const [valor, setValor] = useState("");

  const numero = Number(valor);
  const progreso = Number.isNaN(numero) ? 0 : Math.min(100, Math.max(0, numero));

  return (
    <main className="contenedor">
      <h1>Barra de carga</h1>

      <input
        id="progreso"
        type="number"
        min="0"
        max="100"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe un número"
      />

      <ProgressBar progreso={progreso} />
    </main>
  );
}

export default App;
