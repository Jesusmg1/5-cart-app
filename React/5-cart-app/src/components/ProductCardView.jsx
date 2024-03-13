import { useNavigate } from "react-router-dom";

 // la informacion del producto
    export const ProductCardView = ({ handler, id, name, description, price }) => {

        // esta es una funcion del react-router-dom
        const navigate = useNavigate();

        // se crea esta funcion para añadir los items al carro. Para pasarselo al padre
        const onAddProduct = (product) => {
            console.log(product);
            handler(product);// se pasa por argumento el producto
            navigate('/cart'); // redirige gracias al useNavigate al carro
        }
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">$ {price}</p>
                        <button className="btn btn-primary"
                            onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                    </div>
                </div>
            </>
        )
    }
    