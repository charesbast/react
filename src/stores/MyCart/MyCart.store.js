import Reflux from "reflux";
import Actions from "../../actions/actions.js";
import _ from 'lodash';
import localStorage from 'localStorage';

const LOCAL_STORAGE_KEY = 'myCart';

let MyCartStore = Reflux.createStore({

    listenables: [Actions],

    // Getting items in the local storage
    init: function(){
        this.list = [];

        let localValue = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(!localValue){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.list));
        }else{
            this.list = JSON.parse(localValue);
        }
        this.trigger(this.list);
    },

    updateList: function(list){
        this.list = list;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
        this.trigger(this.list);
    },

    // listeners on actions
    onAddItem: function(item){
        var itemInMyList = _.find(this.list, {isbn: item.isbn});

        if(itemInMyList == undefined) {
            // new item in my list
            item.qqt = 1;
            this.updateList([item].concat(this.list));
        }else{
            this.onAddOneQuantity(itemInMyList);
        }
    },

    onAddOneQuantity: function(item){
        _.assign(_.find(this.list, {isbn: item.isbn}), {qqt: item.qqt+1});
        this.updateList(this.list);
    },

    onRemoveOneQuantity: function(item){
        if(item.qqt > 1) {
            _.assign(_.find(this.list, {isbn: item.isbn}), {qqt: item.qqt - 1});
        }
        this.updateList(this.list);
    },

    onRemoveItem: function(item){
        this.list = _.reject(this.list, {isbn: item.isbn});
        this.updateList(this.list);
    }

});

export default MyCartStore;