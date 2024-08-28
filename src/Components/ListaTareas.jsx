import { useReducer } from 'react'
import { useForm } from '../Hooks/useForm'
const initialState = [{
  id: 1,
  tarea: 'Explicar Reducer',
  finalizado: false
}]

const tareaReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case '[TAREAS] Agregar Tarea':
      return [...state, action.payload]

      case '[TAREAS] Finalizar Tarea':
        return state.map(tarea => {
          if (tarea.id === action.payload) {
            return { 
              ...tarea,
              finalizado: !tarea.finalizado };
          }
          return tarea;
        });

    case '[TAREAS] Eliminar Tarea':
      return state.filter(tarea => tarea.id !== action.payload)

    case '[TAREAS] Borrar Tareas':

      console.log('borrar todo')
      return []
    default:
      return state;
  }

}



export const ListaTareas = () => {


  const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

  const { tarea, formState, onInputChange } = useForm({ tarea: '' })

  const agregarTarea = (event) => {
    if (formState.tarea == '') {
      event.preventDefault()
      return
    }
    event.preventDefault()
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizado: false,

    }
    console.log(tarea)
    const accion = {
      type: '[TAREAS] Agregar Tarea',
      payload: tarea
    }
    dispatch(accion)
  }
  const finalizarTarea = ({id}) => {
    const action = {
      type: '[TAREAS] Finalizar Tarea',
      payload:  id
    };
    dispatch(action);
  };

  const eliminarTarea = ({ id }) => {
    const action = {
      type: '[TAREAS] Eliminar Tarea',
      payload: id
    };
    dispatch(action);
  }

  const reset = () => {
    const action = {
      type: '[TAREAS] Borrar Tareas',
      payload: ''
    }
    dispatch(action);
  }

  return (

    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">

          <input
            type="text"
            className="form-control"
            name='tarea'
            value={tarea}
            placeholder="Ingresa una tarea"
            onChange={onInputChange}
          ></input>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>

      </form>

      <hr />
      <ul className='list-group'>
        {tareasState.map(item => {
          return (
            <li key={item.id} className='list-group-item d-flex justify-content-between'>
              <span>{item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  onChange={() => finalizarTarea(item)}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(item)}
                >🗑</button>
              </div>
            </li>


          )
        })}
      </ul>
    </>
  )
}
