import express from 'express'
const app = express();

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.get('/add-user', (req, resp) => {
    resp.render('addUser')
});



app.post('/submit-user', (req, resp) => {
    console.log(req.body)
    console.log('Form submitted:', req.body)
    // Render the SubmitUser.ejs template and pass form fields
    resp.render('SubmitUser', {
        name: req.body.name,
        mail: req.body.mail,
        age: req.body.age
    })
});

app.listen(3200)