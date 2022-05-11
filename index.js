const express=require('express');
const app=express();
var morgan = require('morgan');

//settings
app.set('appName','My first server');
app.set('view engine','ejs');
app.set('views',__dirname + '/views')



//middlewares
app.use(morgan('combined'));

/* app.use(function(req,res,next){
    console.log('request url: ' +  req.url);
    next();

});

app.use((req,res,next)=>{
    console.log('You are here');
    next();
}); */

//require routing
const routes= require('./routes');
const routesApi= require('./routes-api');
//routing
app.use(routes);
app.use('/api',routesApi);
app.get('*',(req,res)=>{
    res.end('Not Found')
 });

//home
/* app.get('/',(req,res)=>{
     res.render('index.ejs');
});
//login
app.get('/login',(req,res)=>{
    res.render('login');
    
});
//any other
app.get('*',(req,res)=>{
    res.end('Not Found')
}); */

app.listen(3000,()=>{
    console.log('server listening on port 3000');
    console.log('App Name: '+ app.get('appName'));
});
