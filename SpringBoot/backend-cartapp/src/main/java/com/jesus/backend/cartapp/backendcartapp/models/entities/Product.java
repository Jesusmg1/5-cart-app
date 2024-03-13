package com.jesus.backend.cartapp.backendcartapp.models.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// para mapear el producto (una tabla en la bd) usamos @Entity (persistencia)
@Entity
// se crea de forma automatica una tabla con este nombre
@Table(name = "products")
public class Product {

    
    @Id // Para la llave
    @GeneratedValue(strategy = GenerationType.IDENTITY) // para que incremente el id
    private Long id;

    private String name; 

    private String description;

    private Long price;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    

}
