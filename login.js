import fs from "fs";
function loginUser(name, email, password) {
  try {
    if (fs.existsSync("todo.json")) {
      let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
      let Isuser = data.find((value) => value.name === name && value.email === email && value.password === password);
      if (Isuser) {
        return Isuser;
        } else {
        return false;
      }
    }
} catch (error) {
    console.log(error);
  }
}export default loginUser;