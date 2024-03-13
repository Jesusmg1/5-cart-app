
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";


export const CartApp = () => {

    // desestructuramos la funcion useItemsCart() de useItemsCarts.js para tener el objeto y las funciones
    const {cartItems,handlerAddProductCart,handlerDeleteProductCart} = useItemsCart();

    // linea 18 -> se instala la dependencia react-route-dom y se añade las rutas en la app principal.
    // el path es la ruta y los element son los componentes
    // tambien se añade en el main

    return(
        <>
        <Navbar/>
        <div className="container my-4">
            <h3>CardApp</h3>
            <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart}/>

        </div>
        </>
    );


}