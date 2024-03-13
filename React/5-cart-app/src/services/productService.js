export const getProducts = async() => {

    // para obtener la respuesta de la api
    // con el await se espera que se resuelva la respuesta en la promesa y luego resuelta devuelve el objeto response directamente
   const response = await fetch('http://localhost:8080/products'); // hace la comunicacion con el backend
    const products = await response.json(); // la respuesta devuelve un json

    return products;



}
// para calcular el total
export const calculateTotal = (items) =>{
        
    return items.reduce((accumulator,item) => accumulator + item.product.price * item.quantity,0)
      
   


}