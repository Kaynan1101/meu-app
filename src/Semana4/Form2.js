import { useState } from "react";
import "./Forms.css";

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: "Matuê",
    lastName: "Trap",
    email: "matue@trap.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <div className="form2-container">
      <label>
        Nome artístico:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Gênero musical:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        E-mail:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
