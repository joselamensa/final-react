import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import {useCartContext} from "../Context/CartContext";
import ItemCart from './ItemCart'


function Cart () {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Jose',
            email: 'joselamensa@gmail.com',
            phone: '1122334455',
            address: 'avliberta',
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice (),
        día: serverTimestamp (),
    }

    
    const ordenCompra = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(({id}) => console.log(id));
    }


    if (cart.length === 0 ) {
        return (
            <>
            <p>No tenés productos en el carrito!</p>
            <Link to='/'> Hacer compras </Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key = {product.id} product={product} />)
            }
            <p>
                total {totalPrice()}
            </p>
            <button onClick={ordenCompra}>Emitir compra</button>

        </>
    )

}

export default Cart;