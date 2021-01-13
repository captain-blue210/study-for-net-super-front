import ROUTES from '~/routes/api';

export const state = () => ({
  // TODO Is it better to have cartId?
  cart: {},
  token: ''
});

export const actions = {
  async fetchCart({ commit }) {
    // TODO when server side created, fix Cart[] to Cart
    const cart = await this.$axios.$get(
      `${ROUTES.GET.CART}`,
    );
    commit('mutateCart', cart);
  },

  async setToken({ commit }, payload) {
    this.$cookies.set('token', payload);
    commit('mutateToken', payload);
  },

  async setPaymentMethod({ commit }, payload) {
    commit('mutatePaymentMethod', payload);
  }
};

export const mutations = {
  mutateCart(state, newCart) {
    state.cart = newCart;
  },

  mutateToken(state, payload) {
    state.token = payload
  },

  mutatePaymentMethod(state, payload) {
    state.cart = { ...state.cart, ...payload }
  }
};

export const getters = {
  getCart: (state) => {
    return state.cart;
  },
};
