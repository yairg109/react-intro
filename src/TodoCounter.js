// por dentro las props son obejetos
// function TodoCounter(props) {
//   return (
//     <h1>
//         Has completado x de y
//     </h1>

//   )
// }

//ESTA ES OTRA FORMA DE MANDAR LAS PROPS

//Insertamos los estilos de la hoja de estilos
import './TodoCounter.css';
function TodoCounter({total,completed}) {
    return (
      // Se agregan doble llaves para los estilos
      <h1>
          Has completado {completed} de {total}
      </h1>
  
    )
  }
export {TodoCounter}