import ROUTES from '~/routes/api';

export const state = () => ({
  // TODO Is it better to have cartId?
  carts: [],
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
    commit('mutateToken', payload);
  }
};

export const mutations = {
  mutateCart(state, newCart) {
    const index = state.carts.findIndex(
      (cart) => cart.cartId === newCart.cartId,
    );
    index >= 0 ? (state.carts[index] = newCart) : state.carts.push(newCart);
  },

  mutateToken(state, payload) {
    state.token = payload
  }
};

export const getters = {
  getCart: (state) => {
    return state.carts.find((cart) => cart.userId === Number(state.token));
  },
};
