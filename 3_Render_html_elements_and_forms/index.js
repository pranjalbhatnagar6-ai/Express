import express from 'express'
const app = express();

app.get("", (req, resp)=> {
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", (req,resp) => {
    resp.send(`
        <form action="/submit" method="post">
        <input type="text" placeholder="name">
		<br/>
		<br/>
		<input type="password" placeholder="Enter Password">
		<br/>
		<br/>
		<button>Login</button>
		</form>
        `)
})

app.listen(3200)