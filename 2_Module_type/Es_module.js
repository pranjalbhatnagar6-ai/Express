// Why ES Modules?
/*
By default, Node.js uses CommonJS syntax (require, module.exports).

If you try:

import express from 'express';

You'll get an error, because Node doesn’t recognize import/export without proper setup.

*/

// After (ES Module Syntax)

import express from 'express';
import home from './home.js';
import contact from './contact.js';
import about from './about.js';

const app = express();

app.get("/", (req, resp)=>{
    resp.send(home());
});

app.get("/about", (req,resp) => {
    resp.send(about());
})

app.get("/contact", (req, resp) => {
    resp.send(contact());
})

app.listen(3200);