const jsonServer = require('json-server');
const auth = require('json-server-auth');

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();
// 綁定
apiServer.db = apiRouter.db;

apiServer.use(middlewares);
apiServer.use(auth);
apiServer.use(apiRouter);
apiServer.listen(3000, () => {
  console.log('JSON Server is running');
});
