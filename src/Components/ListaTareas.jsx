const initialState =[{
  id: 1,
  tarea: 'Explicar Reducer',
  finalizado: false
}]

const nuevaTarea ={
  id: 2,
  tarea: 'Explicar como usar',
  finalizado: false
}

const agregarTarea = {
  type: '[TAREAS] Agregar Tarea',
  payload: nuevaTarea
}
const eliminarTarea = {
  type: '[TAREAS] Eliminar Tarea',
  payload: nuevaTarea
}
const modificarTarea = {
  type: '[TAREAS] Modificar Tarea',
  payload: nuevaTarea
}
const borrarTareas = {
  type: '[TAREAS] Borrar Tareas',
  payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case '[TAREAS] Agregar Tarea':
      return [...state,action.payload]  

    case '[TAREAS] Eliminar Tarea':
      return [...state,action.payload]  

    case '[TAREAS] Modificar Tarea':
      return [...state,action.payload]  

    case '[TAREAS] Borrar Tareas':
      return []  
    
    default:
      break;
  }
console.log(tareaReducer(initialState, agregarTarea))


export const ListaTareas = () => {
  return (
    <>
    
    </>
  )
}
