const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});