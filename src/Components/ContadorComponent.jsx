import { useCounter } from "../Hooks/useCounter"

export const ContadorComponent = () => {

  const { contador,incrementar,disminuir,resetear} = useCounter(3)
  return (
    <>
    <h1>Contador: {contador}</h1>
    <button className="btn btn-primary" onClick={()=> incrementar(1)}>+1</button>
    <button className="btn btn-danger" onClick={()=> resetear()}>Reset</button>
    <button className="btn btn-primary" onClick={()=> disminuir(5,false)}>-1</button>

    </>

  )
}
