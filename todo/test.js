const todotitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const mainlist = document.getElementById("main");
import { toastify } from "./component/toastify.js";

export const handleCreateNewTodo= (event) =>{
    event.preventDefault();

    if(!todotitle.value) return toastify("please enter valid title");
    const newTodo={
        title:todotitle.value,
        desc: todoDesc.value,
    };
    console.log(newTodo);

   const Listitem=document.createElement('li');

   const todoTitleheading=document.createElement('h3');
   todoTitleheading.innerHTML=newTodo.title;

   const todoDescPara=document.createElement('p');
   todoDescPara.innerHTML=newTodo.desc;

   Listitem.appendChild(todoTitleheading)
   Listitem.appendChild(todoDescPara);
   mainlist.appendChild(Listitem);

};
