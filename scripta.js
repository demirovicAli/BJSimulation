
var paragraf = document.getElementsByClassName("meni");

var deck = [1,1,1,1,2,2,2,
2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,
"J","J","J","J","Q","Q","Q","Q","K","K","K","K"];

var deck8 = replicate (deck,8);

var shuffled = [];




function shuffle() {

while (deck8.length>0) 

{
var x = Math.floor(Math.random() * Math.floor(deck8.length));
shuffled.push(deck8[x]);
deck8.splice(x,1);

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