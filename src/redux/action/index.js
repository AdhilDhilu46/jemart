// For adding products to the cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}



// For removing products from the cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}