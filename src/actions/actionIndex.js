import {PRODUCT} from "../constants";

const addItem = (newItem) => ({
    type: PRODUCT.ADD,
    newItem
});

const deleteItem = id => ({
    type: PRODUCT.DELETE,
    id
});

const filterItem = val => ({
    type: PRODUCT.FILTER,
    val

})

const sortItem =val =>({
    type:PRODUCT.SORT,
    val
})
export {
    addItem,
    deleteItem,
    filterItem,
    sortItem
};