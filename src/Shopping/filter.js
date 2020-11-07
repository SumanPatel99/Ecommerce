import React from "react";
import {connect} from 'react-redux';
import {filterItem} from '../actions/actionIndex';

function Filter({ filterItem, filterApplicable }){
    // console.log(filterItem)
    let filterList = [ "XS","XL","XXL","S","M","L","ML"];
    return(
        <div class="filter">
            {
                filterList.map(val => (

                    <button  style={{
                        color: filterApplicable.includes(val) ? "red" : "black"
                    }}
                    onClick= {() => filterItem(val)
                    }>{val}</button>
                ))
            }
            
        </div>
    )
}
const mapStateToProps = ({ filterApplicable }) => ({ filterApplicable });
const mapDispatchToProps = dispatch => ({
    filterItem: val => dispatch(filterItem(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
