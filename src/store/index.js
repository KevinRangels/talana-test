import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './modules/cart';
import Categories from './modules/categories';
import Products from './modules/products';
import UI from './modules/ui';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products: Products,
    categories: Categories,
    cart: Cart,
    ui: UI
  },
})
