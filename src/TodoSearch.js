import "./TodoSearch.css";
import React from 'react';
export function TodoSearch() {

  const [state,setState] = React.useState();

  
  return (
    <input
      className="TodoSearch"
      placeholder="Buscar..."
      onChange={(event) => {
        console.log(event.target);
        console.log(event.target.value)
      }}
    ></input>
  );
}
