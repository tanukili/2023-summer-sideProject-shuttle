const jsonServer = require('json-server');
const auth = require('json-server-auth');
const express = require('express');

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();
const expressSite = express();
// 綁定
apiServer.db = apiRouter.db;

apiServer.use(middlewares);
apiServer.use(auth);
expressSite.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// 對應的環境變數 或 默認3000
const port = process.env.PORT || 3000;

apiServer.use(apiRouter);
apiServer.listen(port, () => {
  console.log('JSON Server is running');
});
