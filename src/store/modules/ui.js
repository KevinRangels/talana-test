export default {
    state: {
      modalProduct: false,
      modalStatusPay: false,
    },
    actions: {
      showModalProductDetails({ commit }, show) {
        commit('SET_MODAL_PRODUCT', show);
      },
      showModalStatusPay({ commit }, show) {
        commit('SET_MODAL_STATUS_PAY', show);
      },
    },
    mutations: {
      SET_MODAL_PRODUCT(state, show) {
        state.modalProduct = show;
      },
      SET_MODAL_STATUS_PAY(state, show) {
        state.modalStatusPay = show;
      },
    },
    getters: {
      modalProduct: (state) => {
        return state.modalProduct;
      },
      modalStatusPay: (state) => {
        return state.modalStatusPay;
      },
    },
  };
  