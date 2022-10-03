import '../imgs.css';
import { Link } from "react-router-dom";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';




const Item = ({info}) => {
    return (
        <div className='container-fluid'>
        <MDBCard className="imagenescards hola">
            <Link to={`/detalle/${info.id}`} className="prods">
                <MDBCardImage src={info.image} alt='...' position='top'  />
                <MDBCardBody>
                    <MDBCardText className='text-center'>
                        <p>{info.name}</p>
                    </MDBCardText>
                </MDBCardBody>
            </Link> 
        </MDBCard>
        </div>
    );
}

export default Item;