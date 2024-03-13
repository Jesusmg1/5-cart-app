package com.jesus.backend.cartapp.backendcartapp.repositories;

//importamos el CrudRepository y la entidad Producto
import org.springframework.data.repository.CrudRepository;
import com.jesus.backend.cartapp.backendcartapp.models.entities.Product;

// creamos un interface con extension de CrudRepositary y pasamos por parametro la entity y el tipo de la variable id(Long)
public interface ProductRepository extends CrudRepository <Product, Long> {



}
