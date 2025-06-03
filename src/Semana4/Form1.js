import { useState } from "react";
import "./Forms.css";

export default function Form1() {
  const [to, setTo] = useState("Matuê");
  const [message, setMessage] = useState("Salve!");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Você mandou: "${message}" para ${to}`);
    }, 5000);
  }

  return (
    <div className="form1-container">
      <form onSubmit={handleSubmit}>
        <label>
          Para:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Matuê">Matuê</option>
            <option value="Teto">Teto</option>
            <option value="Veigh">Veigh</option>
            <option value="Orochi">Orochi</option>
            <option value="Sidoka">Sidoka</option>
          </select>
        </label>
        <label>
          Mensagem:
          <textarea
            placeholder="Digite sua mensagem para o cantor de trap"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
