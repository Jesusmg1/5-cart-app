import { getProducts } from "../services/productService";
import { useEffect } from "react";
import { useState } from "react";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler}) => {

     // creamos un estado con un valor [] vacio porque los datos vienen de un array
     const [products, setProducts] = useState([]);
    // para el estado de la carga de la respuesta de la API
     const [isLoading,setIsLoading] = useState(true);

     // obtenemos los productos a traves de la API
    const findAll = async() =>{

        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false); // cuando se ha mostrado la respuesta, se termina de cargar
    }

     useEffect(() => {
         // invocamos la funcion
         findAll();
 
     } , []);
 
     //linea 28 pasamos el handler (la funcion del padre al hijo)
    return(

        <>
        {
            isLoading && <div className="alert alert-info">Cargando...</div> // para mostrar una ventanilla de cargando
        }
        <div className="row">


                    {products.map(prod => (
                    <div className="col-4 my-2"
                        key={prod.id}>
                        <ProductCardView
                            handler={ handler }
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
      
            </div>
        
        </>


    );



}