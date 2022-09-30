import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from 'react-router-dom';
import swal from "sweetalert";
import { useCartContext } from "../Context/CartContext";

export const ItemDetail = ({data} ) => {
    
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (count) => {
        swal({
            title: `Haz añadido ${count} bebidas a tu carrito`,
            icon: "success",
        });
        setIrAlCarrito(true);
        addProduct(data, count);
    }
    
    return (
        <div className="container">
            <div className="Detalle  text-center">
                <img className="ImagenDetalle" src={data.image} alt="a"/>
                <div className="Contenido">
                    <h1>{data.name} </h1>
                    <p>{data.informacion} </p>
                    <p>{"$" + data.price} </p>
                    {
                        irAlCarrito
                            ? <NavLink to="/cart">Ir al Carrito</NavLink>
                            :<ItemCount stock={6} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;