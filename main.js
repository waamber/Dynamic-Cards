var cards = [];

var cardContainer = document.getElementById("card-container");
var card = document.getElementById("createdCard");
var textInput = document.getElementById("text-area");
var createBtn = document.getElementById("create-btn");
var deleteBtn = document.getElementById("delete-btn");

function createNewCard(content) {
	var cardCreated = {
		content: content
	}
	return cards.push(cardCreated);
};

function domString(cards) {
	var createCard = "";
	for(var i =0; i < cards.length; i++) {
		var newCard = `<div class="card" id="card-${i}"> 
			 							<div class="createdCard" id="createdCard">${cards[i].content}</div>
			 							<button class="delete-btn" id="delete-btn-${i}">Delete</button>
										</div>`;
		createCard += newCard;	
	}
	writeToDom(createCard);
}

function writeToDom(sentence) {
	cardContainer.innerHTML = sentence;
};

createBtn.addEventListener("click", function(){
	var textInputValue = textInput.value;
	createNewCard(textInputValue);
	domString(cards);
});

cardContainer.addEventListener("click", function(event){
	if(event.target.className === "delete-btn"){
		var parent = event.target.parentNode.parentNode;
		var child = event.target.parentNode;
		parent.removeChild(child);
	}
});

