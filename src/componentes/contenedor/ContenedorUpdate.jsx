import React from "react";
import { useParams } from "react-router-dom";
import FormCrograma from "../Cronograma/FormCronogama";
import FormNota from '../Notas/FormNota'


const ContenedorUpdate = () => {
  const params = useParams()
  return(
    <>
      {params.tipo == 'cronograma'  ? <FormCrograma></FormCrograma> : <></>   }
      {params.tipo == 'nota'  ? <FormNota></FormNota> : <></>   }
    </>
  )
}

export default ContenedorUpdate