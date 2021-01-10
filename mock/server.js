const jsonServer = require("json-server");
const fs = require("fs");
const cors = require("cors");

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
server.post('/cart/add', (req, res) => {
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

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(_router);
server.listen(3001, () => {
   console.log('JSON Server is running');
});
