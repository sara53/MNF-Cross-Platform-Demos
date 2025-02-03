import axios from "axios"

const baseUrl = "http://localhost:3005/products"

const getProducts = () => axios.get( baseUrl )
const getProductById = ( productId ) => axios.get( ` ${baseUrl}/${productId}` )
const addNewProduct = ( product ) => axios.post( baseUrl, product )
const deleteProduct = ( productId ) => axios.delete( `${baseUrl}/${productId}` )
const updateProduct = ( productId, product ) => axios.put( `${baseUrl}/${productId}`, product )

export { getProducts, getProductById, addNewProduct, updateProduct, deleteProduct }