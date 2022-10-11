const input  =  document.querySelector("#input");
const todoBtn = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-items-list");


todoBtn.addEventListener('click', function(){
	let val = input.value;
	if(val !=""){
	let todoItem = document.createElement('div');
	todoList.appendChild(todoItem);
	todoItem.classList.add('todoItem');
	todoItem.innerHTML = input.value;
	/*+'<i id="check-button" class="fas fa-check"></i><i id="trash-button"class="fas fa-trash"></i>' ;*/
	input.value = null;
	
	todoItem.addEventListener('click', function(){
		todoItem.style.textDecoration = "line-through";
	});
	todoItem.addEventListener('dblclick', function(){
		todoList.removeChild(todoItem);
	});
	}
});
	
input.addEventListener("keyup",function(event){
if (event.keyCode===13){
event.preventDefault();
document.getElementById('todo-button').click();
}
});