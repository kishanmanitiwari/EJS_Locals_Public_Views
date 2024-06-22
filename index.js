import express from 'express';
import bodyParser from 'body-parser';

//Instances
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static('public'));


//Routes

app.get('/',(req,res)=>{  
    res.render('index');
})

app.post('/greet',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.render('index',{firstName:firstName,lastName:lastName});
})

//Server
app.listen(3000);