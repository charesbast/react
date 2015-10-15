import Reflux from 'reflux';

let Actions = Reflux.createActions([
    "addItem",                  // called by button in the shop

    "addOneQuantity",           // called by a button in the shopping cart
    "removeOneQuantity",        // called by a button in the shopping cart
    "removeItem"                // called by a button in the shopping cart
]);


export default Actions;