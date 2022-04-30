
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('../Controllers/user');
const { engine } = require('express-handlebars');

app.use(bodyParser.json([]));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.post('/user', userController.createUser);
app.get('/user', userController.getAllUser)
app.get('/user/:userId', userController.getUserById);
app.put('/user/:userId', userController.updateUser);
app.delete('/user/:userId', userController.deleteUser);
app.get('/parentInfo/:empId', userController.getParentsInfo);


module.exports = app;