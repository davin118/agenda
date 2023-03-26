const express =require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection= require('express-myconnection');
const app = express();
const hbs = require('hbs');


//importing routes
 const customerRoutes= require('./routes/customer');

//setttings

app.set('port',process.env.PORT  || 3000);
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'views'));

hbs.registerPartials(__dirname + '/views/partials');
;

//middlewares
app.use(morgan('dev'));

dbOptions = {
  host: 'localhost',
  port: 3309,
  user: 'root',
  password: '1234',
  database: 'crudnodejs'
};
app.use(myConnection(mysql, dbOptions,'single'))
app.use(express.urlencoded({extended:false}))
//route

app.use('/', customerRoutes);


//static  files
app.use(express.static(path.join(__dirname,'public')));



app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
})

