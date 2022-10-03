import '../footer.css';
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {useCartContext} from "../Context/CartContext";
import ItemCart from './ItemCart'
import Button from 'react-bootstrap/Button';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardTitle
  } from 'mdb-react-ui-kit';



function Cart () {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Jose',
            email: 'joselamensa@gmail.com',
            phone: '1122334455',
            address: 'avliberta',
        },
        items: cart.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.count })),
        total: totalPrice (),
        día: serverTimestamp (),
    }

    
    const ordenCompra = async () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const ordenEmitida = await addDoc(ordersCollection, order)
        console.log(ordenEmitida.id, 'order emitida')
        swal({
            title: `Gracias por tu compra en REVKT@R BEBIDA5 `,
            text: `Tu N° de orden es: ${ordenEmitida.id} ` ,
            icon: "success",
        });
    }


    if (cart.length === 0 ) {
        return (
            <>
                <MDBCard shadow='0' border='light' background='white' className='mb-3 text-center foot'>
                    <MDBCardHeader>CARRITO VACIO</MDBCardHeader>
                    <MDBCardBody className='text-primary'>
                        <MDBCardTitle>No tiene productos en el carrito!</MDBCardTitle>
                        <Link to='/'>
                        <Button> HACER COMPRAS</Button>
                        </Link>
                    </MDBCardBody>
                </MDBCard>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key = {product.id} product={product} />)
            }
            <p>
                Total: $ {totalPrice()}
            </p>
            <Button onClick={ordenCompra}>Emitir compra</Button>

        </>
    )

}

export default Cart;