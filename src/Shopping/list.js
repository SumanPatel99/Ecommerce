import React from "react";
import SingleItem from "./singleItem";
import { connect } from "react-redux";

function ToDoList(props){
    let {product} = props;
    console.log(product)
    return (<div className="cart-item">
        <p>Add Items To Cart</p>
        {product.map((item) => <SingleItem {...item}/>)}</div>)
}

const mapStateToProps = ({ product }) => ({ product });

export default connect(mapStateToProps)(ToDoList);