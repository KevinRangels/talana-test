import { HTTP } from '../../axios';

export default {
  state: {
    products: [],
    product: null,
    loading: false,
  },
  actions: {
    async getProducts({ commit }) {
      try {
        commit('SET_LOADING_PRODUCTS', true);
        let res = await HTTP.get('/product/?format=json');
        commit('SET_GET_PRODUCTS', res.data);
        commit('SET_LOADING_PRODUCTS', false);
      } catch (error) {}
    },
    getProductDetails({ commit }, product) {
      try {
        commit('SET_GET_PRODUCT', product);
        commit('SET_MODAL_PRODUCT', true);
      } catch (error) {}
    },
  },
  mutations: {
    SET_GET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_GET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_LOADING_PRODUCTS(state, status) {
      state.loading = status;
    },
  },
  getters: {
    allProducts: (state) => {
      return state.products;
    },
    detailProduct: (state) => {
      return state.product;
    },
    loadingProducts: (state) => {
      return state.loading;
    },
  },
};
