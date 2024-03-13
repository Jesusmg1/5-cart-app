import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

// el carrito de compras
export const CartView = ({items, handlerDelete}) => {

    const [total,setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
    // para guardar el total en el estado
    setTotal(calculateTotal(items));
    // guardamos los valores en la sesion de la pagina
    // con el json.stringify convertimos un objeto a string (objeto -> string)
    sessionStorage.setItem('cart', JSON.stringify(items))

    } , [items]);

    const onDeleteProduct = (id) => {
     
        handlerDelete(id);// se pasa por argumento el producto
    }

    const onCatalog = () =>{

        navigate('/catalog');

    }

    return(
        <>
        <h3>Carro de compra</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price * item.quantity}</td>
                            <td><button className="btn btn-danger" onClick={() =>onDeleteProduct(item.product.id)}>Eliminar</button></td>
                            </tr>

                        ))}
                      

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total</td>
                            <td colSpan={2} className="text-start fw-bold"> { total } </td>
                        </tr>
                    </tfoot>
                </table>
                <button className="btn btn-success" onClick={onCatalog}>Seguir comprando</button>
        </>


    );


} 