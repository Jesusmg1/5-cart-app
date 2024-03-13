package com.jesus.backend.cartapp.backendcartapp.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jesus.backend.cartapp.backendcartapp.models.entities.Product;

import com.jesus.backend.cartapp.backendcartapp.services.ProductService;

// el controller es para trabajar con mvc o con vistas
// RestController: esto es para api rest, va a devolver un json o xml (datos)
@RestController
// @RequestMappping('api') sirve para poner una ruta base a toda la clase
@CrossOrigin(origins = "http://localhost:5173/") // para poder conectar con react (que usa este puerto)
public class ProductController {

    //inyectamos
    @Autowired
    private ProductService service;

    // metodo para obtener la lista de productos
    @GetMapping("/products") // sirve para leer datos o recuperarlos. Es una peticion del tipo GET
    public List<Product> list(){

        return service.findAll(); // va a convertir el contenido a json

    }

}
