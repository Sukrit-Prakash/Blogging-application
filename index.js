const express = require("express")
const path = require("path");
const mongoose = require("mongoose")
const userRouter = require("./routes/user")

const app = express()
const PORT = 8000;
mongoose.connect('mongodb://localhost:27017/blogify').then(e => console.log('mongodb connected'))

//for inmplementing server side rendering 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render("home");

});
app.use("/user",userRouter)
app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.listen(PORT,()=> console.log(`server started at port ${PORT}`))