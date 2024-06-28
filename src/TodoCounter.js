// por dentro las props son obejetos
// function TodoCounter(props) {
//   return (
//     <h1>
//         Has completado x de y
//     </h1>

//   )
// }

//ESTA ES OTRA FORMA DE MANDAR LAS PROPS

function TodoCounter({total,completed}) {
    return (
      <h1 style={{
        
      }}>
          Has completado {completed} de {total}
      </h1>
  
    )
  }
export {TodoCounter}