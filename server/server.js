import jsonServer from 'json-server';
// this package handles a lot. It can handle authentication, authorization, registration, and endpoint protection. we can also override if we need something custom.
import auth from 'json-server-auth';
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

// To test the register endpoint, you can use the following curl command:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","location":"New York","email":"johndoe@example.com","password":"password123","phone":"1234567890"}' http://localhost:3000/register

// To test the login endpoint, you can use the following curl command:
// curl -X POST -H "Content-Type: application/json" -d '{"email":"johndoe@example.com","password":"password123"}' http://localhost:3000/login

// /!\ Bind the router db to the app
server.db = router.db

server.use(auth)
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});