import { BsFillCartCheckFill } from "react-icons/bs";
import { useCartContext } from "../Context/CartContext";


const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <BsFillCartCheckFill/>
            <span> {totalProducts () || ''} </span>
        </>
    );
}

export default CartWidget;