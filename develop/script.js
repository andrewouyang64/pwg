//get DOM elements
var generateElement=document.getElementById('generate');
var lengthElement=document.getElementById('length');
var uppercaseElement=document.getElementById('uppercase');
var numericElement=document.getElementById('numeric');
var symbolElement=document.getElementById('symbol');
var displayElement=document.getElementById('display');

// genernate character's codes
var uppercaseCharCode = arrayCodeRange(65,90);
var lowercaseCharCode = arrayCodeRange(97,122);
var numberCharCode = arrayCodeRange(48,57);
var symbolCharCode = arrayCodeRange(33,47).concat(arrayCodeRange(58,64))
.concat(arrayCodeRange(91,96)).concat(arrayCodeRange(123,126));

function arrayCodeRange(start, end) {
  var codeArr = [];
  for (var i=start; i<=end; i++) {
    codeArr.push(i);
  }
  return codeArr;
}

// event listner and pick up user choices
generateElement.addEventListener('click', ()=>{
var uppercase=uppercaseElement.checked;
var numeric=numericElement.checked;
var symbol=symbolElement.checked
var a= lengthElement.value;

generatePassword(uppercase, numeric, symbol, a)
});

// password generation
function generatePassword(uppercase, numeric, symbol, a) {
  var characterCode = lowercaseCharCode;
  if(uppercase) characterCode = characterCode.concat(uppercaseCharCode);
  if(numeric) characterCode = characterCode.concat(numberCharCode);
  if(symbol) characterCode = characterCode.concat(symbolCharCode);
  if(uppercase&&numeric) characterCode = characterCode.concat(uppercaseCharCode
  .concat(numberCharCode));
  if(uppercase&&symbol) characterCode = characterCode.concat(uppercaseCharCode
  .concat(symbolCharCode));
  if(uppercase&&numeric&&symbol) characterCode = characterCode.concat(uppercaseCharCode
  .concat(numberCharCode.concat(symbolCharCode)));
   
  var passwordCharacters = [];
    for (var i=0; i<a; i++) {
    var charCode = characterCode[Math.floor(Math.random()*characterCode.length)];
    passwordCharacters.push(String.fromCharCode(charCode));
    }
    var finalPassword=passwordCharacters.join('')
    displayElement.innerHTML=finalPassword.toString();
  }   


