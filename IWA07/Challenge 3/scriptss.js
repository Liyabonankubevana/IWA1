const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '-9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed =  `${((-parseInt(leoBalance)) + (-parseInt(sarahBalance))).toFixed(2)}`; //multiply - to get positive value + plus parseInt coz the value is a string and tofixed to round to 2 decimals
const leo = `${leoName} ${leoSurname} (Owed: R ${(leoBalance).toFixed(2)})`; //Removed addition signs then interpolated and added tofixed to round to two decimals
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${(sarahBalance).tofixed(2)})`; //Removed addition signs then interpolated and added tofixed to round to two decimals 
const total = "Total amount owed: ";
const result = `${leo}\n${sarah}\n${divider}\n\n${divider}\n${total}\n${owed}\n${divider}`; //fix the interpolation and make a new line for each with the /n 

console.log(result);