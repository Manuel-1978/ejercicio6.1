import React from "react";
 import List from "./List";

export default function Shop() {
   
    const Shop = {
        electronics: [
            {id: 27, products: "Televisor", brand: "LG", modelo: "XP7302", price: 399},
            {id: 28, products: "Equipo Hi-FI", brand: "Samsung", modelo: "VF235", price: 179},
            {id: 29, products: "Televisor", brand: "Sony", modelo: "Bravia-173", price: 498},
        ],
        groceries: [
            {id: 30, products: "Galletas", brand: "María", price: 0.90},
            {id: 31, products: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, products: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, products: "Pasta", brand: "Gallo", price: 0.90},
        ],
        pets: [
            {id: 34, products: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, products: "Arena de gato", brand: "Limpior", price: 1.10},
        ]
    };  
return(
   <div className="container ">
       
   <List category="electronics" products={Shop.electronics} />
   <List category="groceries" products={Shop.groceries} />
   <List category="pets" products={Shop.pets} />
   
  
    </div>
   
)}
