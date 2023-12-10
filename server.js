const jsonServer = require('json-server');
const auth = require('json-server-auth');

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();
// 綁定
apiServer.db = apiRouter.db;

apiServer.use(middlewares);
apiServer.use(auth);
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

// 對應的環境變數 或 默認3000
const port = process.env.PORT || 3000;

apiServer.use(apiRouter);
apiServer.listen(port, () => {
  console.log('JSON Server is running');
});
