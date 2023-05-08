import axios from 'axios';


export const tomarChecks = ( async () => {
    return await  axios.get('http://localhost:2000/check')
        
})

export const crearCheck= ( async (Cronograma) => {

    return await axios.post('http://localhost:2000/check', Cronograma)

})

export const tomarCheck = ( async (id) => {
    return await  axios.get(`http://localhost:2000/check/${id}`)
        
})

export const ActulizarCheck = ( async (id, Cronograma) => {
    return await  axios.put(`http://localhost:2000/check/${id}`, Cronograma)
        
})

export const eliminarCheck= ( async (id) => {

    return await  axios.delete(`http://localhost:2000/check/${id} `)

})
