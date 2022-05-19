var string ='Jasmine';
function totalChar(string)
{
    return string.length;
}
//console.log(totalChar(string));

function largeNumber(num1, num2)
{
    return Math.max(num1, num2);
}
//console.log(largeNumber(10,20));
function booleanFlag(num)
{
    return(num > 5000 && num < 9999);
}
//console.log(booleanFlag(3000));
function cubeRoot(num) {
    return Math.cbrt(num);
}
//console.log(cubeRoot(125));
function inchToFeet(inch) {
    var feet = inch/12;
    return(feet.toFixed(2));
}
//console.log(inchToFeet(12.234));
function celciusToFaren(degree) {
    var faren = degree * 9 / 5 + 32;
    return(degree+'\xb0C is '+ faren+'\xb0F');
}
//console.log(inchToFeet(0));
function lbToKg(num) {
   var length = num.length;
   var unit = num.substring(length-2, length);
   var input = parseInt(num);
   var value;
   if(unit == 'lb')
   {
       value = input * .454;
       value = num + ' is '+ value+'kg'
   }
   else
   {
        value = input * 2.205;
        value = num + ' is '+ value+'lb'
   }
    return(value);
}
//console.log(lbToKg('52kg'));
////////Create JSON file//////////////////////////////
function checkExists(arrayList, itemToFind) {
    let itemFound = false;
    if (arrayList.filter(item => item.name === itemToFind.name).length >0)
    {
        itemFound = true;
    }
    return itemFound;
}
function createJSFile(){
const fs = require("fs");
var states;

try {
    states = require("./usa");    
    console.log('While initialize:'+states);
    if (!Array.isArray(states))
    {
        states = new Array(states);
    }    
} catch (error) {
    console.log('File not found and  initializing empty array');
    states= new Array();
}

let state ={
    name: 'MD',
    capital: 'Annopolis'
};

if (!checkExists(states, state))
{
    states.push(state);
}

console.log(states.includes(state));

state ={
    name: 'VA',
    capital: 'Richmond'
};

if (!checkExists(states, state))
{
    states.push(state);
}

state ={
    name: 'FL',
    capital: 'Orlando'
};

if (!checkExists(states, state))
{
    states.push(state);
}

console.log('After adding new values');
console.log(states);
fs.writeFile('usa.json', JSON.stringify(states), err => {
     
    // Checking for errors
    if (err) 
        console.log(err);
   
    console.log("Done writing"); // Success
});
}
///longest string between two strings
function longestString(string1, string2)
{
    /*if(string1.length > string2.length)
        return string1;
    else if (string2.length > string1.length) {
        return string2
    } else {
        return string1 + ', '+ string2;
    }*/
    return string1.length>string2.length? string1:(string1.length==string2.length)?string1+','+string2:string2;
}
console.log(longestString('savi','muth'));

/////shortest string in array
function shortString(str_ara) {
    var min = str_ara[0].length;
    str_ara.map(v => min = Math.min(min, v.length));
    result = str_ara.filter(v => v.length == min);    
    return result;
  }
  //console.log(shortString(['a', 'aa', 'aaa','sav','b'])); 