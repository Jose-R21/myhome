import axios from 'axios';


export const tomarCronogramas = ( async () => {
    return await  axios.get('http://localhost:2000/cronograma')
        
})

export const crearCronograma= ( async (Cronograma) => {

    return await axios.post('http://localhost:2000/cronograma', Cronograma)

})

export const tomarCronograma = ( async (id) => {
    return await  axios.get(`http://localhost:2000/cronograma/${id}`)
        
})

export const ActulizarCronograma = ( async (id, Cronograma) => {
    return await  axios.put(`http://localhost:2000/cronograma/${id}`, Cronograma)
        
})

export const eliminarCronograma= ( async (id) => {

    return await  axios.delete(`http://localhost:2000/cronograma/${id} `)

})
