import "./TodoSearch.css";
export function TodoSearch() {
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
