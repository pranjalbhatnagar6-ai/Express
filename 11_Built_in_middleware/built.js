import path from 'path'
import express from 'express'
const app = express()

// To get the form details we use builtin middleware.
app.use(express.urlencoded({extended:false}))
// builtin middleware to make the absolute path.
app.use(express.static('public'))

app.get("/",(req,resp)=>{
    const filePath = path.resolve("view/index.html");
    resp.sendFile(filePath)
})

app.get("/login",(req,resp)=>{
    resp.send(`
        <form action="submit" method="post">
            <input type="text" placeholder="Enter email" name="email"/>
            <input type="text" placeholder="Enter password" name="password" />
            <button>Login</button>
        </form>
        `)
})

app.post("/submit",(req,resp)=>{
    console.log("User login details are: ",req.body);
    resp.send("submit Page")
})


app.get("/users",(req,resp)=>{
    resp.send("User Page")
})

app.listen(3200)