const express = require("express")
const cors = require("cors")
const app=express();

app.use(express.json());
app.use(
    cors({
      origin: "*",
    })
  );
const Pizza = require('./models/pizzaModel')
const db = require("./database.js")
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)

app.get("/",(req,res)=>{
    res.send("server working🔥");
})
app.get("/getpizzas",(req,res)=>{
   Pizza.find({},(err,docs)=>{
    if(err){
        console.log(err);
    }
    else{
        res.send(docs);
    }
   })
})

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port🔥`)

LINK="mongodb+srv://admin:admin123@cluster0.ymf03hp.mongodb.net/mern-pizza"
STRIPE ="sk_test_51Nk3VISGRlunq0a06Nhr9Eql9GE1cGZSaMT1SZhoNl2xpRiPwNBIWQ0Q8Tdhs2JEfNCaVJwB7msgfV5fVmiBEzwe00yuC3HvfP"