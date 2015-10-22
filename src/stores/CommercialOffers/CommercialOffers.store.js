/**
 * Created by M08180 on 21/10/2015.
 */
import Reflux from "reflux";
import Actions from "../../actions/actions.js";
import MyCartStore from '../MyCart/MyCart.store.js';
import _ from 'lodash';
import http from '../../core/HttpClient';

let CommercialOffers  = Reflux.createStore({
    listenables: [Actions],

    init: function(){
        this.offers = [];

        this.listenTo(MyCartStore, this.onMyCartChange);
        this.getCommercialOffers(MyCartStore.list);
    },

    onMyCartChange: function(items){
        console.log("CommercialOffers => onMyCartChange", items);
        this.getCommercialOffers(items);
    },

    getCommercialOffers: function(items) {
        var urlToCall = 'http://henri-potier.xebia.fr/books/';

        if(!items || !items.length || items.length === 0){
            return [];
        }else {
            for (var i = 0; i < items.length; i++) {
                for(var j = 0; j < items[i].qqt; j++) {
                    urlToCall += items[i].isbn;
                    if (i < items.length - 1) {
                        urlToCall += ',';
                    }
                }
            }
            urlToCall += '/commercialOffers';


            http.get(urlToCall)
                .then(data => {
                    this.offers = data.offers;
                    this.trigger(this.offers);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
});

export default CommercialOffers;