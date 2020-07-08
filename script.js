var clicks = 0;
var buy = 50;
var autoclickers = 0;
var upclisck= 50;
var click  = 1
setInterval(autoclick, 4000);
function add() {
    clicks = clicks + 1 * click;
    document.getElementById('number').innerHTML= clicks;
}
function puchuse() {
    if (clicks >= buy){
        clicks = clicks - buy;
        autoclickers = autoclickers + 1;
        buy = buy + 50;
        document.getElementById('buycost').innerHTML= buy;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ buy +' Click')
    }

}
function autoclick() {
    if (autoclickers >= 1){
        clicks = clicks + autoclickers * click;
        document.getElementById('number').innerHTML= clicks;
    }
}
function upgradeclick() {
    if (clicks>= upclisck){
        click = click + 1;
        clicks = clicks - upclisck;
        upclisck = upclisck + 75;
        document.getElementById('number').innerHTML= clicks;
        document.getElementById('buycost1').innerHTML= upclisck;

    }
    else {
        alert('You do not have enough clicks the price is '+ upclisck +' Click')
    }
}