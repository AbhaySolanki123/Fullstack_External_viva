import fs from 'fs';
function registerUser(name, email, password) {
  try{
    let user = [];
    let ob={
        id:new Date(),name,email,password, todo:[],
    }
    if(fs.existsSync("todo.json")) {
        let data = JSON.parse(fs.readFileSync("todo.json","utf-8"));
        let isUserExist = data.some((value) => value.name === name);
        if (isUserExist) {
            return "user exist";
        }
        user = data;
    }
    user.push(ob);
    fs.writeFileSync("todo.json", JSON.stringify(user, null, 2));
    console.log("User create");
    } catch (error) {
    console.log(error);
}
}export default registerUser;