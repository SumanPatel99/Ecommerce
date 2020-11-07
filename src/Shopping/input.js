import React,{Fragment,Component} from 'react';
import { connect } from "react-redux";
import { addItem} from "../actions/actionIndex";
import product from '../constants/product.json';
import List from "./list";

class ToInput extends Component{
    
    render(){
        // console.log("Rendering")
        let { handleSubmit, filterApplicable,sortItem } = this.props;
        let productToShow = [ ...product ];
        if(filterApplicable.length){
            let productIds = [];
            productToShow.map(product => {
                filterApplicable.map(filterItem => {
                    if( !productIds.includes(product.id) && product.availableSizes.includes(filterItem)){
                        productIds.push(product.id);
                    }
                });
            });
            productToShow = productToShow.filter(({ id }) => productIds.includes(id));
        }
        else{
        }
        // console.log(sortItem)
        if(sortItem === "Low") {
            productToShow =  productToShow.sort((product1, product2) => {
                return product1.price - product2.price ;
            });
        }else if(sortItem === "High") {
            productToShow =  productToShow.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }
        return(
            <Fragment>
                <div className="shelf-container">
                    <div className="container">
                        {
                            productToShow.map((product)=> {
                                let {icon,title,price,availableSizes,id} = product;
                                return (
                                <div className="row">
                                    <img src={icon} alt="Product-1" className="img"/>
                                    <p> {title} </p>
                                    <span> Price : { price}</span><br/>
                                    <p>Sizes: {availableSizes.join(", ")}</p>
                                    <div>
                                        <button onClick={e => { e.preventDefault(); handleSubmit(product); }}>Add To Cart</button>
                                    </div>
                                </div>             
                            )
                        })
                        }
                    </div>
                </div>
            </Fragment>
            
        )
    }

    
}
const mapStateToProps = ({ filterApplicable, sortItem }) => ({ filterApplicable, sortItem });

const mapDispatchToProps = dispatch => ({
    handleSubmit: (id) => dispatch(addItem(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ToInput);