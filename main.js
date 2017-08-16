var cards = [];

var cardContainer = document.getElementById("card-container");
var textInput = document.getElementById("text-area");
var createBtn = document.getElementById("create-btn");

function domString(cards) {
	var textInputString = "";
	for(var i = 0; i < cards.length; i++) {
		var newCard= "";
		newCard += `<div class="cardContainer" id="cardContainer">`; //added id to [i]
		newCard += 	`<button id="delete=btn">Delete</button>`;
		newCard += `</div>`;
		newCard += newCard;
	}
	writeToDom(textInputString);
}

function writeToDom(sentence) {
	cardContainer.innerHTML = sentence;
}

createBtn.addEventListener("click", function(){
	domString(cards);
});