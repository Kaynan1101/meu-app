import { sculptureList } from "./data";
import { useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const cantor = sculptureList[index];

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="gallery-container">
      <button onClick={handleClick}>Próximo cantor</button>
      <h2>
        <i>{cantor.name}</i> por {cantor.artist}
      </h2>
      <h3>
        ({index + 1}) de {sculptureList.length}
      </h3>
      <button onClick={handleShowMore}>
        {showMore ? "Esconder" : "Mostrar"} detalhes
      </button>
      <img src={cantor.url} alt={cantor.alt} />
      {showMore && <p>{cantor.description}</p>}
    </div>
  );
}
