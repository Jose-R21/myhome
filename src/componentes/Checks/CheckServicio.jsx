import axios from 'axios';


export const tomarChecks = ( async () => {
    return await  axios.get('http://api.orshakti.net.ve:2000/check')
        
})

export const crearCheck= ( async (Check) => {

    return await axios.post('http://api.orshakti.net.ve:2000/check', Check)

})

export const tomarCheck = ( async (id) => {
    return await  axios.get(`http://api.orshakti.net.ve:2000/check/${id}`)
        
})

export const ActulizarCheck = ( async (id, Cronograma) => {
    return await  axios.put(`http://api.orshakti.net.ve:2000/check/${id}`, Cronograma)
        
})

export const eliminarCheck= ( async (id) => {

    return await  axios.delete(`http://api.orshakti.net.ve:2000/check/${id} `)

})
