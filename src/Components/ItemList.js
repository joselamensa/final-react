import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(prods => <Item key={prods.id} info={prods} />)
    );
}

export default ItemList;