"use strict"//treat all js code as new version 
//alert(4+4)// gives error  , we are using node js , not browser, beacuse js ka engine browser me pahle tha 
let name ="aman"// string
let age=21// number
let isLoggenIn= false// true  boolean
// primitive type of data type
// number -> 2 to power 53 
// bigint
// string-> "" or ''
//null = standalone value
//undefined
//symbol ->  use for uniqueness


// objects

console.log(typeof "aman");
console.log(typeof  age);
console.log(typeof null); // type hai object ka 
console.log(typeof undefined); undefined



//let score =33
//let score="33"
//let score ="abc333"
// let score = null
//let score =true
// let score ="hitesh" // nan
let score = undefined


//console.log(typeof score)
//console.log(typeof(score))

let value =Number(score)// converting in number
console.log(typeof value)
console.log(value)// nan not a number 

/*
"33"-> 33
"333abc" ->=nan
true->1; false ->0
undefined-> nan
null-> 0


*/
// let isloogedin=1
//let isloogedin=""
let isloogedin="aman"

let booleanislooggedin= Boolean(isloogedin)
console.log(booleanislooggedin)
console.log(typeof booleanislooggedin)
/*
1-> true, 0-> false
""-> false
"aman"-> true

*/
let some =33
let stringnumber= String(some)
console.log(typeof stringnumber)
console.log(stringnumber)
