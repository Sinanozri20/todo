import { handleCreateNewTodo } from "./modules/controller/handleCreateTodo.js";

const submitTodoButton = document.getElementById("submit");
submitTodoButton.addEventListener("click", handleCreateNewTodo);


const name = "ali";
const name2 = "ali2";

const obj = {
  name,
};

const obj2 = {
  name,
};
console.log({ obj, obj2 });


const array = [100, 200, 300, 400, 500];

const filtredItems = array.filter((item) => item !== 100);
console.log(filtredItems);

const obj0 = {
  name: "ali",
  age: 22,
  isMarried: false,
};

const updatedObj = {
  ...obj0,
  isMarried: true,
};
