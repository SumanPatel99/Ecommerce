import {PRODUCT} from "../constants";

const INITIAL_STATE = {
    product: [],
    filterApplicable : [],
    sortItem:false
};

const myReducer = (state = INITIAL_STATE, action) => {
    let product = [...state.product];
    switch (action.type) {
        case PRODUCT.ADD:
            let newIndex = product.findIndex( item => item.id === action.newItem.id);
            if(newIndex === -1){
                product.push({
                    ...action.newItem,
                    quantity : 1
                });
            }
            else{
                product[newIndex].quantity = product[newIndex].quantity + 1;
            }
            return {
                ...state,
                product
            };

        case PRODUCT.DELETE:
            let deleteProduct = product.findIndex(item => item.id === action.id)
            // console.log(deleteProduct)
            product.splice(deleteProduct, 1);
            return {
                    ...state,
                    product
            };
        case PRODUCT.FILTER:
            // console.log(action);
            let filterApplicable = [...state.filterApplicable]
            let filterApplicableIndex = filterApplicable.findIndex( item => item === action.val )
            if(filterApplicable.includes(action.val)){
                filterApplicable.splice(filterApplicableIndex,1);

            }
            else{
                filterApplicable.push(action.val);
            }
            return{
                ...state,filterApplicable
            }
        case PRODUCT.SORT:
            // console.log(action.val)
            return{
                ...state,
                sortItem:action.val
        }
        default:
            return state;
    }
};

export default myReducer;