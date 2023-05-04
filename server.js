const jsonServer = require('json-server')
const auth = require('json-server-auth')
const middlewares = jsonServer.defaults();
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require('cors');

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

server.use(middlewares);
server.db = router.db
server.use(auth)
server.use(router)
server.listen(5000, ()=>{
  console.log('server is runing.!')
})