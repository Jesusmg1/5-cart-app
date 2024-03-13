//-----REDUCER--------
// el reducer busca coger el estado actual hacer ciertas acciones y devolver un nuevo estado con los cambios
// 1- para el reducer, realizamos una funcion que tenga por argumentos un estado y la accion(el estado es el objeto(producto/item)) // state -> items/producto
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";
export const itemsReducer = (state=[],action) =>{

    // realizamos un switch, dependiendo del tipo de accion hara una accion u otra y devolvera un estado.
    // linea 15: el action payload representa el objeto producto
    switch(action.type){

        case AddProductCart:

        return [
            ...state,
             {

            product: action.payload,
            quantity: 1,
            
            }
    ];

        case UpdateQuantityProductCart:

        return state.map((i) =>{
            if (i.product.id === action.payload.id) {
                
                return{
                    ...i,
                    quantity: i.quantity +1
                };
            }
            return i;
        });

        case DeleteProductCart:

        return [
            ...state.filter((i) => i.product.id !== action.payload), 
          
        ];
        default: return state;
    }


}