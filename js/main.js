
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
	document.getElementsByTagName('cardImage').setAttribute(src, cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	cardsInPlay = 2;
} 
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!")
} else {
	console.log("Sorry, try again.")
}
}

var flipCard = function() {
this.getAttribute('data-id')
	checkForMatch(2)
 cardsInPlay.push(cards[cardID].rank);
console.log()
console.log("User flipped " + cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit)
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
var cards[0] = document.createElement(img src="images/back.png" alt="Queen of Diamonds");
var cards[1] = document.createElement('img');
var cards[2] = document.createElement('img');
var cards[3] = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', i);
element.addEventListener('click', flipCard);
document.getElementById("game-board").appendChild();
	}
};
createBoard();





