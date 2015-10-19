import Reflux from "reflux";
import Actions from "../../actions/actions.js";

const localStorageKey = '';

function getItemByKey(list,itemKey){
    return _.find(list, function(item) {
        return item.key === itemKey;
    });
}

var MyCartStore = Reflux.createStore({

    listenables: [Actions],

    // Getting items in the local storage
    getInitialState: () => {
        this.list = localStorage.getItem(localStorageKey);
        return this.list;
    },

    updateList: (list) => {
        localStorage.setItem(localStorageKey, JSON.stringify(list));
        this.list = list;
        this.trigger(list);
    },


    // listeners on actions
    onAddItem: (item) => {
        item.qqt = 0;
        this.updateList([item].concat(this.list));
    },

    onAddOneQuantity: (item) => {

    },

    onRemoveOneQuantity: (item) => {

    },

    onRemoveItem: (item) => {

    }

});

export default MyCartStore;