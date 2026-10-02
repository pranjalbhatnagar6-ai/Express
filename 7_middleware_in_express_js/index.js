import express from 'express'
const app = express();

// MiddleWare Function
function checkRoute(req, resp, next){
    console.log(req.url); //checking
    next(); // send to the page
}

app.use(checkRoute)

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})


app.get("/user",(req,resp)=>{
    resp.send("User Page")
})


app.get("/products",(req,resp)=>{
    resp.send("Products Page")
})

app.listen(3200)