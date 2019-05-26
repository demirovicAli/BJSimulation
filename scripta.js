
var paragraf = document.getElementsByClassName("meni");

var deck = [1,1,1,1,2,2,2,
2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,
"J","J","J","J","Q","Q","Q","Q","K","K","K","K"];


function shuffle() {

var shuffled = [];

while (deck.length>1) {
var x = Math.floor(Math.random() * Math.floor(deck.length));
shuffled.push(deck[x]);

console.log(x, " index   ", deck[x]);
deck.splice(x,1);

}




var textnode = (document.createTextNode(shuffled));     
paragraf[0].appendChild(textnode);
}

shuffle();