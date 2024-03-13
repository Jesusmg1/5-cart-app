import { Navigate ,Route,Routes} from "react-router-dom";
import {CatalogView} from "../components/CatalogView";
import {CartView} from "../components/CartView";


export const CartRoutes = ({handlerAddProductCart, handlerDeleteProductCart, cartItems}) =>{

    return(
        <>
        
        <Routes>
                <Route path="catalog" element={<CatalogView handler={ handlerAddProductCart}/>}/>
                
                <Route path="cart" element={(
            //preguntamos si el carro es nulo con el ternario ?
            // la condicion es que si el carro tiene longitud 0 que no muestre la tabla, si tiene items que la muestre
            cartItems?.length <= 0 ?
            <div className="alert alert-warning"> No hay productos en el carro</div>
            :
            (<div className="my-4 w-50">
                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>

            </div>)
            
            )}/>

            <Route path="/" element={ <Navigate to={'/catalog'}/> } />

            </Routes>
           
        
        
        </>



    )


}