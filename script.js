// Creator: Nathan A
// Description: lets you click 4 hours
// Creation Date: 7/7/2019
// Update Date: 8/3/2020
var clicks = 0;
var firstclasscost = 50;
var greatcost = 500;
var remarkablecost = 5000;
var expocost = 50000
perfectcost = 500000
var acfirst = 0;
var acgreat = 0;
var acremark = 0;
var acexpo = 0;
var acperf = 0;
var upclisck= 50;
var click  = 1;
var upgradamount = 0;
var click2 = 0
var click3
setInterval(autoclick1, 5000);
setInterval(autoclick2, 4000);
setInterval(autoclick3, 3000);
setInterval(autoclick4, 2000);
setInterval(autoclick5, 1000);

function add() {
    if (upgradamount >= 15) {
        click3 = click2 * 10;
        clicks = clicks + click3;
        document.getElementById('number').innerHTML = clicks;
    }
    else {
        if (upgradamount >= 10) {
            click2 = click * 10;
            clicks = clicks + click2;
            document.getElementById('number').innerHTML = clicks;
        } else {
            clicks = clicks + 1 * click;
            document.getElementById('number').innerHTML = clicks;
        }
    }
}
function firstclass() {
    if (clicks >= firstclasscost){
        clicks = clicks - firstclasscost;
        acfirst = acfirst + 1;
        firstclasscost = Math.round(firstclasscost * 2);
        document.getElementById('buycost2').innerHTML= firstclasscost;
        document.getElementById('counter1').innerHTML= acfirst;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ firstclasscost +' Click')
    }

}
function great() {
    if (clicks >= greatcost){
        clicks = clicks - greatcost;
        acgreat = acgreat + 1;
        greatcost = Math.round(greatcost * 3);
        document.getElementById('buycost3').innerHTML= greatcost;
        document.getElementById('counter2').innerHTML= acgreat;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ greatcost +' Click')
    }
}
function remark() {
    if (clicks >= remarkablecost){
        clicks = clicks - remarkablecost;
        acremark = acremark + 1;
        remarkablecost = Math.round(remarkablecost * 3.2);
        document.getElementById('buycost4').innerHTML= remarkablecost;
        document.getElementById('counter3').innerHTML= acremark;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ remarkablecost +' Click')
    }
}
function expo() {
    if (clicks >= expocost){
        clicks = clicks - expocost;
        acexpo = acexpo + 1;
        expocost = Math.round(expocost * 3.4);
        document.getElementById('buycost5').innerHTML= expocost;
        document.getElementById('counter4').innerHTML= acexpo;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ expocost +' Click')
    }
}
function perfect() {
    if (clicks >= perfectcost){
        clicks = clicks - perfectcost;
        acperf = acperf + 1;
        perfectcost = Math.round(perfectcost * 3.6);
        document.getElementById('buycost6').innerHTML= perfectcost;
        document.getElementById('counter5').innerHTML= acperf;
        document.getElementById('number').innerHTML= clicks;
    }
    else {
        alert('You do not have enough clicks the price is '+ perfectcost +' Click')
    }
}
function autoclick1() {
    if (acfirst >= 1){
        clicks = clicks + acfirst * 10 ;
        document.getElementById('number').innerHTML= clicks;
    }
}
function autoclick2() {
    if (acgreat >= 1){
        clicks = clicks + acgreat * 60;
        document.getElementById('number').innerHTML= clicks;
    }
}
function autoclick3() {
    if (acremark >= 1){
        clicks = clicks + acremark * 250;
        document.getElementById('number').innerHTML= clicks;
    }
}
function autoclick4() {
    if (acexpo >= 1){
        clicks = clicks + acexpo * 825;
        document.getElementById('number').innerHTML= clicks;
    }
}
function autoclick5() {
    if (acperf >= 1){
        clicks = clicks + acperf * 50000;
        document.getElementById('number').innerHTML= clicks;
    }
}
function upgradeclick() {
    if (clicks>= upclisck){
        click = click  * 2;
        upgradamount = upgradamount + 1 ;
        clicks = clicks - upclisck;
        upclisck = Math.round(upclisck * 3);
        document.getElementById('number').innerHTML= clicks;
        document.getElementById('counter6').innerHTML=upgradamount;
        document.getElementById('buycost1').innerHTML= upclisck;

    }
    else {
        alert('You do not have enough clicks the price is '+ upclisck +' Click')
    }
}
