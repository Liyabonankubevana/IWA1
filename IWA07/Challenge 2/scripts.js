const nickname = "Timmy";
const firstname = "Timothy";
const show = nickname || firstname;

console.log(`Good Morning, ${show}!`); 

//firstly, needed to add a const to evaluate the first two variable
//then needed to change the quotation marks into backtext in the console.log
//lastly, reference show when interpolating