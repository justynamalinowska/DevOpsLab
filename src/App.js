import React from "react";
import { data } from "./module-data"; // Importuj wygenerowaną tablicę
import PersonProfile from "./PersonProfile.js"; // Importuj komponent

function App() {
  return (
    <div>
      <h1>People List</h1>
      {data.map((person) => (
        <PersonProfile
          key={person.id}
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
        />
      ))}
      <a href='http://localhost:8080/'>GO TO BACKEND</a>
    </div>
  );
}

export default App;
