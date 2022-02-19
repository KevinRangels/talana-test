export default {
    state: {
      modalProduct: false,
    },
    actions: {
      showModalProductDetails({ commit }, show) {
        commit('SET_MODAL_PRODUCT', show);
      },
    },
    mutations: {
      SET_MODAL_PRODUCT(state, show) {
        state.modalProduct = show;
      },
    },
    getters: {
      modalProduct: (state) => {
        return state.modalProduct;
      },
    },
  };
  