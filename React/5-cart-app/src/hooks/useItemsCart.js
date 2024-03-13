import { useEffect } from "react";
import { useState, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

//--------------ESTO ES UN HOOK PERSONALIZADO----------- (para poder reutilizar codigo)
// creamos esta constante para inicializar el carro de compras
// con el sessionStorage podemos obtener la sesion (con el get) 
// lo parseamos a un objeto, porque lo que obtenemos es un string ( de string a objeto)
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; // esta condicion hace que si existe algo en el carro pues hace el parseo, sino que este vacio el array


export const useItemsCart = () => {

    //cartItems es el estado actual, el dispatch es la accion, itemsReducer es la funcion del Reducer con las acciones
    // initialCartItems son los datos iniciales
    const [cartItems , dispatch] = useReducer(itemsReducer,initialCartItems);
    useEffect(() => {
        // guardamos los valores en la sesion de la pagina
        // con el json.stringify convertimos un objeto a string (objeto -> string)
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    
        } , [cartItems]);

    const handlerAddProductCart = (product) =>{
       
        // Para aumentar la cantidad de un producto existente 
        // buscamos si el id del producto coincide con alguno del carro
       const hasItem = cartItems.find((i) => i.product.id === product.id);
        // si es true entra
       if (hasItem) {
        // realiza la accion para modificar la cantidad del producto
        dispatch({

            type: UpdateQuantityProductCart,
            payload:product, // el payload es el objeto que queremos pasar, en este caso, el producto
        });
        
       }else {
        // realiza la accion del itemsReducer para añadir productos
       dispatch({

        type: AddProductCart,
        payload: product,

       });

       }
       
        

    };

    const handlerDeleteProductCart = (id) => {
        // realiza la funcion de borrar a traves de la accion del itemsReducer
        dispatch({

            type: DeleteProductCart,
            payload: id,
    
           });

    }
    
    // devolvemos el objeto cartItems y las funciones a la app principal CartApp
    return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,

    }


}