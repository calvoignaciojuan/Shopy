

/**
 * This function calculates total price of a new order
 * @param {array} productArray cartProduct>: list of products
 * @returns {number} Total price
 */
export const totalPrice = (productArray) =>{

    return( 
        productArray.reduce((sumTotal,currentProduct) =>{
            return(sumTotal + currentProduct.price);
        },0)
    );
};




// const listItems = [{id:1,price:10},{id:2,price:20},{id:3,price:30}];
// const orders = [ [{id:4,price:40},{id:5,price:50},{id:6,price:60}]];

// const suma = [...orders,listItems];

// console.log(listItems);
// console.log(orders);
// console.log(suma);
