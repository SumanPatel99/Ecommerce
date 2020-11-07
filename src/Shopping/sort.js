import React from 'react';
import {connect} from 'react-redux';
import {sortItem} from '../actions/actionIndex';

function Sorting({sortItem}){
    let val = ["Low","High"];
    return( 
        <div className="sort">                  
            {
                val.map(key => (<button className="sort_item" onClick={() => sortItem(key)}> {key} </button>))
            }
        </div>
    )
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    sortItem: val => dispatch(sortItem(val))

});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);