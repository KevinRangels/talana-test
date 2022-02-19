import { HTTP } from '../../axios';

export default {
  state: {
    categories: [],
    categorySelected: null,
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
    selectCategory({ commit, state, dispatch }, category) {
      commit('SET_SELECT_CATEGORY', category);
      dispatch('getCategorySelected', category )
    }
  },
  mutations: {
    SET_GET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_LOADING_CATEGORIES(state, status) {
      state.loading = status;
    },
    SET_SELECT_CATEGORY(state, status) {
      state.categorySelected = status;
    },
  },
  getters: {
    allCategories: (state) => {
      return state.categories;
    },
    loadingCategories: (state) => {
      return state.loading;
    },
    categorySelected: (state) => {
      return state.categorySelected;
    },
  },
};
