import { useMemo } from "react"
import { useState } from "react"


export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([2,3,4,5,7,7,4,32,65,8,97,6,4,3,1,2,4,564,76,8])
  const [show, setShow] = useState(true)
  const getCalculo = (listaNumeros) => useMemo( ()=> {
    console.log('Calculando')
    return listaNumeros.reduce((a,b) => a*b )
  }, [listaNumeros])
  const agregarNumero = () => {
    setListaNumeros([...listaNumeros, listaNumeros [listaNumeros.length -1] +1])
    console.log(listaNumeros)
  }
  return (
    <>
    <h2>Calculo:</h2>
    <p>{getCalculo (listaNumeros)}</p>
    <button className="btn btn-primary" onClick={ () => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
    <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar numeros</button>
    </>
  )
}

