import { userList } from "../Model/userModel.js";

export function handleUsers(req, resp) {

  const usersData = userList();

  console.log(usersData);

  resp.render('users', { users: usersData });
}