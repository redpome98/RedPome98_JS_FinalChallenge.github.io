const ToDoForm=document.querySelector(".ToDo");
const ToDoInput=document.querySelector("#ToDoInput");
const ToDoList=document.querySelector(".ToDoList");
let ToDoSaveList=[];

function ToDoUpload(thing){
    thing.preventDefault();
    const NewThing=ToDoInput.value;
    ToDoInput.value="";
    const ToDoObj={
        text:NewThing,
        id:Date.now(),
    }
    ToDoSaveList.push(ToDoObj);
    userToDo(ToDoObj);
    ToDoSave();
}
function ToDoRemove(event){
    const li=event.target.parentElement;
    li.remove();
    ToDoSaveList=ToDoSaveList.filter((toDo)=>toDo.id!==parseInt(li.id));
    ToDoSave();
}

function ToDoSave(){
    localStorage.setItem("SaveToDo",JSON.stringify(ToDoSaveList));
}

function userToDo(NewThing){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const Btn=document.createElement("button");
    Btn.innerText=`x`;
    Btn.addEventListener("click",ToDoRemove);
    li.appendChild(span);
    li.appendChild(Btn);
    span.innerText=NewThing.text;
    ToDoList.appendChild(li);
} 
ToDoForm.addEventListener("submit",ToDoUpload);

const SavedToDo=localStorage.getItem("SaveToDo");
 if(SavedToDo!==null){
    const parsedToDo=JSON.parse(SavedToDo);
    ToDoSaveList=parsedToDo;
    parsedToDo.forEach(userToDo);
}