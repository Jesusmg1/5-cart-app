package com.jesus.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.jesus.backend.cartapp.backendcartapp.models.entities.Product;


// esta clase de definir los metodos a implementar(las acciones), coge la informacion de los repositorios
public interface ProductService {


    List<Product> findAll(); // hacemos una lista y utilizamos este metodo para extraer todos los productos
    
} 