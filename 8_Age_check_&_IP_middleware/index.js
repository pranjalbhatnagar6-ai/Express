import express from 'express'
const app = express();

// Age check through middleware
/*
function ageCheck(req,resp, next){
    if(!req.query.age || req.query.age<18){
        resp.send("Alert! You can not access this page")
    }else{
        next();
    }
}

app.use(ageCheck) 
*/

// IP CHECK 
function ipCheck(req, resp, next){
    const ip = req.socket.remoteAddress
    console.log(ip)
    if(ip.includes("10.228.131.218")) //The website will not run on this IP Address
        {


        resp.send("Alert! You can not access this page") 
        }
    else{
        next()
        }
}

app.use(ipCheck)


app.get("/",(req, resp)=> {
    resp.send("<h1>Home page</h1>")
})

app.get("/login",(req, resp)=> {
    resp.send("<h1>Login page</h1>")
})

app.get("/admin",(req, resp)=> {
    resp.send("<h1>Admin page</h1>")
})

app.listen(3200)