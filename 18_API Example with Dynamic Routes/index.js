import express from "express"
import userData from './user.json' with {type:'json'}
const app = express();

app.get("/",(req,resp)=>{
    console.log(userData);
    resp.send(userData);
})

app.get("/username/:name",(req, resp)=>{
    const name = req.params.name;
    console.log(name);
    let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase()) // it is a js function use to filter out data
    resp.send(filterData);
})

app.listen(3200)