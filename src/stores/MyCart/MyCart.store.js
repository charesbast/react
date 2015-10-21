import Reflux from "reflux";
import Actions from "../../actions/actions.js";
import _ from 'lodash';
import localStorage from 'localStorage';

const LOCAL_STORAGE_KEY = 'myCart';

var MyCartStore = Reflux.createStore({

    listenables: [Actions],

    // Getting items in the local storage
    init: function(){
        let localValue = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(!localValue){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
            this.list = [];
        }else{
            this.list = JSON.parse(localValue);
        }
        this.trigger(this.list);
    },

    updateList: function(list){
        this.list = list;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
        this.trigger(list);
    },


    // listeners on actions
    onAddItem: function(item){
        item.qqt = 1;
        if(_.find(this.list, {isbn: item.isbn}) == undefined) {
            this.updateList([item].concat(this.list));
        }else{
            this.onAddOneQuantity(item);
        }
    },

    onAddOneQuantity: function(item){
        console.log("addOneQuantity", item);
    },

    onRemoveOneQuantity: function(item){

    },

    onRemoveItem: function(item){

    }

});

export default MyCartStore;