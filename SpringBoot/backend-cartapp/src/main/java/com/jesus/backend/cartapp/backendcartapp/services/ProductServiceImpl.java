package com.jesus.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jesus.backend.cartapp.backendcartapp.models.entities.Product;
import com.jesus.backend.cartapp.backendcartapp.repositories.ProductRepository;


// esta clase es para implementar los metodos (las acciones) de la clase ProductService
// esta etiqueta hace que este componente se convierta en componente de Spring (@Service) (linea 14)
// hacemos un implement del ProductService a esta clase (linea 15)
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired // con esta etiqueta podemos inyectar la siguiente variable (que es un componente)
    private ProductRepository repository; // se crea una variable del tipo del repositorio del producto (ProductRepository)
    
    
    
    @Override
    // se usa para hacer una sincronizacion la bd con cualquier operacion ya sea consultar o añadir,etc
    @Transactional (readOnly = true) // readOnly es para que solo lea y no haga ningun cambio (para consultas)
    public List<Product> findAll() {
       
        // casteamos el repository a List para que nos devuleva un List (porque pide un iterable)
        return (List<Product>)repository.findAll();
    }



}
