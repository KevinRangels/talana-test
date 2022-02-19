import { HTTP } from '../../axios';

export default {
  state: {
    products: [],
    productFiltered: [],
    product: null,
    loading: false,
    filterSearch: null,
    filterCategory: null
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
        commit('SET_GET_PRODUCT', product);
        commit('SET_MODAL_PRODUCT', true);
    },
    getFilterSearch({ commit, state }, search) {
      commit('SET_FIELD_SEARCH', search);
      if (state.filterCategory && state.filterSearch) {
        let filter = state.productFiltered.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));
        return commit('SET_FILTER_SEARCH', filter);
      }
      if (state.filterCategory && !state.filterSearch) {
        let filter = state.products.filter(e => {
          return e.category.id === state.filterCategory.id
        })
        return commit('SET_FILTER_SEARCH', filter);
      }
      let filter = state.products.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));
        return commit('SET_FILTER_SEARCH', filter);
    },
    getCategorySelected({ commit, state }, category) {
      commit('SET_CATEGORY_SELECTED', category);
      if (category) {
        let filter = state.products.filter(e => {
          return e.category.id === category.id
        })
        return commit('SET_FILTER_SEARCH', filter);
      }
      return commit('SET_FILTER_SEARCH', []);
    }
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
    SET_FILTER_SEARCH(state, products) {
      state.productFiltered = products;
    },
    SET_FIELD_SEARCH(state, search) {
      state.filterSearch = search;
    },
    SET_CATEGORY_SELECTED(state, category) {
      state.filterCategory = category;
    },
  },
  getters: {
    allProducts: (state) => {
      if (state.filterSearch || state.filterCategory) {
        return state.productFiltered;
      }
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
