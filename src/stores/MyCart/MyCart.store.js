/**
 * Created by M08180 on 15/10/2015.
 */

import Reflux from "reflux";
import Actions from "../actions/actions.js";

const localStorageKey = '';

function getItemByKey(list,itemKey){
    return _.find(list, function(item) {
        return item.key === itemKey;
    });
}

var MyCart = Reflux.createStore({

    listenables: [Actions],

    // Getting items in the local storage
    getInitialState: () => {
        this.list = localStorage.getItem(localStorageKey);
        return this.list;
    },

    onAddItem: (item) => {
        console.log(item);
        this.updateList([item].concat(this.list));
    },

    updateList: (list) => {
        localStorage.setItem(localStorageKey, JSON.stringify(list));
        this.list = list;
        this.trigger(list);
    }

});

export default Reflux;