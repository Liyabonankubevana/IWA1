const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

//these are prices of items and had to be delcared

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 'NONE_SELECTED';
let batteries = 35 * 2;
let pens = 5 * 'NONE_SELECTED';
let totalGoods = shoes + toys + shirts + batteries + pens;

//got to declare details for customers to be used 
let currency = null;
let location = "RSA";
let customer = 1; 
let shipping = 0;

if (location === "RSA") {
    shipping = R400;
} else if (location === "NAMIBIA") {
    shipping = $600;
} else {
    shipping = $800;
} 

//if location is North Korea console BANNED_WARNING as we do not ship there

if (location ==="North Korea") {
    console.log(BANNED_WARNING);
}

// calculating shipping special 

if ((location === "RSA" || location === "NAMIBIA") && 
    customer === 1 ) {
        if (totalGoods >= 1000 || totalGoods >= 60) {
            shipping = 0;
        }
    } else {
        console.log(FREE_WARNING);
    }