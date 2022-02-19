import { HTTP } from '../../axios';

export default {
  state: {
    categories: [],
    loading: false,
  },
  actions: {
    async getCategories({ commit }) {
      try {
        commit('SET_LOADING_CATEGORIES', true);
        let res = await HTTP.get('/product-category/?format=json');
        commit('SET_GET_CATEGORIES', res.data);
        commit('SET_LOADING_CATEGORIES', false);
      } catch (error) {}
    },
  },
  mutations: {
    SET_GET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_LOADING_CATEGORIES(state, status) {
      state.loading = status;
    },
  },
  getters: {
    allCategories: (state) => {
      return state.categories;
    },
    loadingCategories: (state) => {
      return state.loading;
    },
  },
};
