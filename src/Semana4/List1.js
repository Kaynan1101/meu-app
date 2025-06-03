import { useState } from "react";
import "./List.css";

let nextId = 0;

export default function List1() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <div className="list1-container">
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a name"
      />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
