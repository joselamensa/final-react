import React from "react";
import { useCartContext } from "../Context/CartContext";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext ();
    return (
        <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={ product.image } alt = { product.title } fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Título : { product.name }</MDBCardTitle>
              <MDBCardText>
                Cantidad: { product.count }
              </MDBCardText>
              <MDBCardText>
                Precio u.: { product.price }
              </MDBCardText>
              <MDBCardText>
                Subtotal: {product.count * product.price}
              </MDBCardText>
              <button onClick={() => removeProduct (product.id)}> Eliminar </button>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        </MDBCard>
    )
}

export default ItemCart;