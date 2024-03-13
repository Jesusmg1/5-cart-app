import { useEffect } from "react";
import { getProducts } from "./services/productService";
import { useState } from "react";
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";
import { products } from "./data/products";

// creamos esta constante para inicializar el carro de compras
// con el sessionStorage podemos obtener la sesion (con el get) 
// lo parseamos a un objeto, porque lo que obtenemos es un string ( de string a objeto)
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; // esta condicion hace que si existe algo en el carro pues hace el parseo, sino que este vacio el array

export const CartApp = () => {

    // se crea para el estado del carro de compras
    // linea 32: pasamos los datos del hijo al padre
    const [cartItems, setCartItems] = useState(initialCartItems);

    // esta es la funcion que va a añadir los elementos al carro
    // le pasamos por argumento el producto
    // esta funcion la llevaremos al hijo (al CartView)

    const handlerAddProductCart = (product) =>{
        // Para aumentar la cantidad de un producto existente 
        // buscamos si el id del producto coincide con alguno del carro
       const hasItem = cartItems.find((i) => i.product.id === product.id);
        // si es true entra
       if (hasItem) {
        
        // Esta es una forma

        /*setCartItems([
            ...cartItems.filter((i) => i.product.id !== product.id), // agrega todos los productos ybusca el id que coincida, borra ese producto y lo vuelve a añadir
            {
                product,
                quantity: hasItem.quantity +1,
            }


        ]);*/

        setCartItems(
            // i es el objeto entero. Crea un arreglo nuevo con todos los items (una copia)
            cartItems.map((i) =>{
                if (i.product.id === product.id) {
                    
                    i.quantity = i.quantity + 1;
                }
                return i;
            })
        );
        
       }else {

        // añadimos los valores 
        setCartItems([
            ...cartItems,
             {

            product,
            quantity: 1,
            
            }
    ]);

       }
       
        

    };

    const handlerDeleteProductCart = (id) => {

        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id), // añade todos los items menos el id que coincida con el que pasamos por argumento
          
        ]);

    }
   
    return(
        <>
        
        <div className="container my-4">
            <h3>CardApp</h3>
            
            <CatalogView handler={ handlerAddProductCart}/>

            {//preguntamos si el carro es nulo con el ternario ?
            // la condicion es que si el carro tiene longitud 0 que no muestre la tabla, si tiene items que la muestre
            cartItems?.length <= 0 ||
            (<div className="my-4 w-50">
                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>

            </div>)
            
            }

        </div>
        </>
    );


}