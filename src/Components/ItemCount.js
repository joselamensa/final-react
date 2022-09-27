import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react";


function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState (initial);

    const Suma = () => {
        if(stock>count) {
            setCount(count + 1)
        }
    }
    const Resta = () => {
        if (initial < count) {
            setCount(count - 1)
        }
    }

    return (
        <Card.Body>
        <Button variant="primary" onClick={Suma}>+</Button>
        <Button variant="primary" onClick={Resta} >-</Button>
        <p> {count} </p>
        <Button variant="primary" onClick={() => onAdd(count)}>Añadir al carrito</Button>
        </Card.Body>
    );
}

export default ItemCount;