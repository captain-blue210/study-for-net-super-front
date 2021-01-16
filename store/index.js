import ROUTES from '~/routes/api';

export const state = () => ({
  user: {},
  // TODO Is it better to have cartId?
  cart: {},
  token: ''
});

export const actions = {
  async fetchUser({ commit }) {
    const user = await this.$axios.$get(
      `${ROUTES.GET.USER}`
    )
    commit('mutateUser', user);
  },
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
    await this.$axios.put(`${ROUTES.PUT.CART}`, payload);
    commit('mutatePaymentMethod', payload);
  },

  async confirmOrder({ commit }, payload) {
    await this.$axios.post(`${ROUTES.POST.ORDER}`, { cart: payload });
    commit('mutateCart', {});
    this.$router.push('/step/complete');
  },
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
  },

  mutateUser(state, payload) {
    state.user = payload;
  }
};

export const getters = {
  getCart: (state) => {
    return state.cart;
  },
  getUser: (state) => {
    return state.user;
  }
};
