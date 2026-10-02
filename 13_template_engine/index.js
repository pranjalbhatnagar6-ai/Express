import express from 'express'
const app = express();

app.set('views', './view')
app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    resp.render('home',{name:'Anil',ytChannel:'Code step by step', age:29})
})

app.listen(3100)

