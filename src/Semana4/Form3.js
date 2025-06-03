import { useState } from "react";
import "./Forms.css";

export default function Form3() {
  const [person, setPerson] = useState({
    name: "Matuê",
    artwork: {
      title: "Máquina do Tempo",
      city: "Fortaleza",
      image: "https://akamai.sscdn.co/uploadfile/letras/fotos/7/7/2/7/7727b8b3b8e7e2b8e7b8e7b8e7b8e7b8.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  return (
    <div className="form3-container">
      <label>
        Nome do cantor:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Música famosa:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        Cidade:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Imagem:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i> por {person.name}
        <br />
        (de {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </div>
  );
}
