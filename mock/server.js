const jsonServer = require("json-server");
const fs = require("fs");
const cors = require("cors");
const { nextTick } = require("process");

const server = jsonServer.create();
const _router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
const routes = JSON.parse(fs.readFileSync('./routes.json', 'utf-8'));

server.use(
   cors({
      origin: true,
      credentials: true,
      preflightContinue: false,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   })
);
server.options('*', cors());

server.use(jsonServer.bodyParser);
// cart add API mock, always returns success.
server.post('/v1/cart', (req, res) => {
   if (req.method === 'POST') {
      const cartId = req.body['cartId'],
         userId = req.body['userId'],
         goodsId = req.body['goodsId'];

      if (goodsId == null || userId == null) {
         throw new Error('goodsId or userId is undefined');
      }

      res.status(200).jsonp({
         cartId: cartId,
         success: true,
         message: "Adding a item to cart is success"
      });
   }
});

server.post('/v1/order', (req, res) => {
   if (req.method === 'POST') {

      const order = req.body['cart'];
      db.orders.push({ orderId: order.cartId, ...order });
      fs.writeFileSync('./db.json', JSON.stringify(db, null, '\t'), 'utf-8');

      res.status(200).jsonp({
         orderId: order.cartId,
         success: true,
         message: "order success"
      });
   }
});

server.get('/step/cart', (req, res) => {
   if (req.method === 'GET') {
      const token = req.headers.authorization.replace('Bearer ', '');

      const cart = db.cart.find(cart => {
         return cart.userId === Number(token);
      });

      res.status(200).jsonp(cart);
   }
});

server.get('/v1/users', (req, res) => {
   if (req.method === 'GET') {
      const token = req.headers.authorization.replace('Bearer ', '');

      const user = db.users.find(user => {
         return user.userId === Number(token);
      });

      res.status(200).jsonp(user);
   }
});

server.put('/v1/cart', (req, res) => {
   if (req.method === 'PUT') {
      const token = req.headers.authorization.replace('Bearer ', '');

      let updatedCart;
      db.cart = db.cart.map((cart) => {
         if (cart.userId !== Number(token)) {
            return cart;
         }

         const param = req.body['paymentMethod'];
         updatedCart = { ...cart, paymentMethod: param };
         return updatedCart
      });

      const jsonString = JSON.stringify(db, null, '\t');
      fs.writeFileSync('./db.json', jsonString, 'utf-8');

      res.status(200).jsonp(updatedCart);
   }
});

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(_router);
server.listen(3001, () => {
   console.log('JSON Server is running');
});
