var paragraf = document.getElementsByClassName("meni");
var dugme = 0;
var cardDealt =0;
var playerHand = [];
var dealerHand = [];
var player = document.getElementById("player");
var dealer = document.getElementById("dealer");	

var deck = [1, 1, 1, 1, 2, 2, 2,
    2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10,
    "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K"
];

var deck8 = replicate(deck, 8);

var shuffled = [];




function shuffle() {

    while (deck8.length > 0)

    {
        var x = Math.floor(Math.random() * Math.floor(deck8.length));
        shuffled.push(deck8[x]);
        deck8.splice(x, 1);

    }
    var textnode = (document.createTextNode(shuffled));
    paragraf[0].appendChild(textnode);
    paragraf[0].style.textAlign = "center";
}



function replicate(arr, times) {
    for (var parts = []; times > 0; times >>= 1) {
        if (times & 1)
            parts.push(arr);
        arr = arr.concat(arr);
    }
    return Array.prototype.concat.apply([], parts);
}

shuffle();


//dugme za aktiviranje igre 0=ugaseno 1 radi

function onoff (){
	if (	dugme === 0) { dugme = 1;

console.log("Dugme = 1");
return;
	}
		if (	dugme === 1) { dugme = 0;
console.log("Dugme = 0");
		}
};


// game 

function igra () {




console.log	("igra aktivirana");

//should i deal cards
if (dugme === 1 && cardDealt === 0) {dijeli();
console.log("dijelim");

};


};


//dealing function
function	dijeli () {

playerHand.push(shuffled[0]);
playerHand.push(shuffled[2]);
dealerHand.push(shuffled[1]);
dealerHand.push(shuffled[3]);
console.log("dijelim 2");
cardDealt	=1;

	//draw CARDS
    var textnode = (document.createTextNode(playerHand	));
    player.appendChild(textnode);
    var textnode2 = (document.createTextNode(dealerHand	));
    dealer.appendChild(textnode2);

//erase cards from deck

shuffled.splice(0,4);	
    var textnode = (document.createTextNode(shuffled));
    paragraf[0].innerHTML = '';
    paragraf[0].appendChild(textnode);
    paragraf[0].style.textAlign = "center";

}

//refresh

setInterval(igra,1000)