import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from 'react-router-dom';
import swal from "sweetalert";
import { useCartContext } from "../Context/CartContext";
import Button from "react-bootstrap/esm/Button";

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
                            ? <Button><NavLink to="/cart" className="text-white">Ir al Carrito</NavLink></Button>
                            :<ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;