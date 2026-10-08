import express from 'express';
import { handleUsers } from './Controller/userController.js';

const app = express();

app.set('view engine', 'ejs');

app.get('/user', handleUsers);

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
