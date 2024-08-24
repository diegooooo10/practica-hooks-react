import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

  const [contador, setContador] = useState(valorInicial )

  const incrementar = (valor = 1) => {
    setContador(contador + valor )
  }

  const disminuir = (valor = 1, negativo) => {
    if (!negativo && contador - valor < 0){ 
      setContador
      return
    }

    setContador(contador - valor )
  }

  const resetear = () => {
    setContador(0)
  }

  return {
    contador,
    incrementar,
    disminuir,
    resetear
  }
}
