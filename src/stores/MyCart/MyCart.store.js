import Reflux from "reflux";
import Actions from "../../actions/actions.js";
import _ from 'lodash';

var MyCartStore = Reflux.createStore({

    listenables: [Actions],

    // Getting items in the local storage
    init: function(){
        this.list = [];
        return this.list;
    },

    updateList: function(list){
        this.list = list;
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