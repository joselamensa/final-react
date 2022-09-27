import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="prods">
            <img src ={info.image} alt=""/>
            <p>{info.name}</p>
        </Link>
    );
}

export default Item;