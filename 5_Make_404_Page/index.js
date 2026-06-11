import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const absPath = path.resolve(__dirname, '../4_Render_html_file')

// Serve static files (CSS, images, etc)
app.use(express.static(__dirname));

app.get("/", (req, resp) => {
    resp.sendFile(absPath + "/home.html")
});

app.get("/login", (req, resp) => {
    resp.sendFile(absPath + "/login.html")
});

app.get("/about", (req, resp) => {
    resp.sendFile(absPath + "/about.html")
});

app.use((req, resp) => {
    resp.status(404).sendFile(path.resolve(__dirname, './404.html'))
})

app.listen(3200)