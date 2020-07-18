var input = document.getElementById("userinput");
var button = document.getElementById("submit");
var list = document.querySelector("ul");

//To evaluate the length of the User input just to make sure empty item is not added to the list.
function inputLength() {
	return input.value.length;
}

//Creates the new Item along with the delete button.
function createListElement() {
//Will create the new item and append to the existing list.
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
//Will create the button icon and append to the newly created item in the list.
	var del = document.createElement("BUTTON");
	del.id = "delete";
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
//Will make sure the input box is emptyed after submitting the new item.
	input.value = "";
}

//This will append the new item to the list on clicking on the "Enter" button.
function onMouseClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//This will append the new item to the list on pressing "Enter" button in keyboard.
function onPressingEnter(newevent) {
	if (inputLength() > 0 && newevent.which === 13) {
		createListElement();
	}
}

//Will stick out or remove the strike on cliking on the list item.
function crossOverList(event) {
	if (event.target.tagName === 'LI') {
	event.target.classList.toggle("done");
	}
}

//Will delete the list intem on clicking on the delete button placed next to each Item.
function deleteListItem(event) {
	if (event.target.id === 'delete') {
		console.log(event.target.parentElement);
		var div = event.target.parentElement;
	  	div.style.display = "none";
	}
}

list.addEventListener("click", deleteListItem);

list.addEventListener("click", crossOverList);

button.addEventListener("click", onMouseClick);

input.addEventListener("keypress", onPressingEnter);