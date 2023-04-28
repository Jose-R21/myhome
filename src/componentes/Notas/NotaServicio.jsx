import axios from 'axios';


export const tomarNotas = ( async () => {
    return await  axios.get('http://localhost:2000/nota')
        
})

export const crearNota= ( async (Nota) => {

    return await axios.post('http://localhost:2000/nota', Nota)

})

export const tomarNota = ( async (id) => {
    return await  axios.get(`http://localhost:2000/nota/${id}`)
        
})

export const ActulizarNota = ( async (id, Nota) => {
    return await  axios.put(`http://localhost:2000/nota/${id}`, Nota)
        
})

export const eliminarNota= ( async (id) => {

    return await  axios.delete(`http://localhost:2000/nota/${id} `)

})
