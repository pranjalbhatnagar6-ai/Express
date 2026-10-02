import express from 'express'
const app = express();

// creating Route middleware
function ageCheck(req, resp, next){
    if(!req.query.age || req.query.age<18){
        resp.send("Alert! You can not access the page")
    }else{
        next()
    }
}

app.use(ageCheck)

function checkUrl(req, resp, next){
    console.log("This req url is "+ req.url);
    next();
}

app.use(checkUrl)

app.get("/",ageCheck,checkUrl, (req,resp)=>{
    resp.send("Home Page")
})


app.get("/user",checkUrl, (req,resp)=>{
    resp.send("User Page")
})


app.get("/products",checkUrl,ageCheck, (req,resp)=>{
    resp.send("Products Page")
})

app.listen(3200)