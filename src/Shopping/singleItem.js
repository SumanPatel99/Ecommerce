import React from 'react';
import {connect} from 'react-redux';
import { deleteItem} from "../actions/actionIndex";
function SingleItem({ id, title, quantity,icon1,deleteItem }){
    // let { item } = props;
    return(
        <div className="cart_item">
            ID: <p>{id}</p>
            <img src={icon1}/><br/>
            Quantity:<p>{quantity}</p>
            <button onClick={e => {e.preventDefault(); deleteItem(id)}}>Delete</button>
        </div>
    )
}


const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);