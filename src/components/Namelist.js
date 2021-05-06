import React from "react";
import Person from "./Person"
function Namelist() {
  const names = ["thiraphat", "boaty", "kunnuu", "kunmay"];
  const namesList = names.map((name, idx) => {
    <div>{idx}, {name}</div>;
  });

  const persons = [
      { id: 1, name: "thiraphat", age: 19 },
      { id: 2, name: "chorakhe", age: 31 },
      { id: 3, name: "hello", age: 20 }
    ];
  const personlist  = persons.map(person => <Person key={person.id} person={person} />)
  return (
      <div>
        <div>{namesList}</div>
        <hr/>
        <div>{personlist}</div>
    </div>
  );
}

export default Namelist;
