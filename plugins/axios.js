export default ({ $axios, app }) => {
   $axios.onRequest((config) => {
      // TODO replace mock
      // const token = app.$cookies.get('token');
      const token = 1;
      if (token) {
         config.headers.common['Authorization'] = `Bearer ${token}`;
      }
   })
}
