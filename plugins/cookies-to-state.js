export default ({ app, store }) => {
   // TODO replace mock
   app.$cookies.set('token', 1);
   const token = app.$cookies.get('token');
   if (token) {
      store.dispatch('setToken', token);
   }
}
