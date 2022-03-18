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
//console.log(a);
generatePassword(uppercase, numeric, symbol, a)
});

// password generation
function generatePassword(uppercase, numeric, symbol, a) {
  var passwordCharacters = [];
  var choiceCount = [];
  var characterCode = lowercaseCharCode;
  if(uppercase) {characterCode = characterCode.concat(uppercaseCharCode);
  choiceCount.push(1); 
      var charCode = uppercaseCharCode[Math.floor(Math.random()*uppercaseCharCode.length)];
      passwordCharacters.push(String.fromCharCode(charCode));
      }

  if(numeric) {characterCode = characterCode.concat(numberCharCode);
    choiceCount.push(2); 
      var charCode = numberCharCode[Math.floor(Math.random()*numberCharCode.length)];
      passwordCharacters.push(String.fromCharCode(charCode));
      } 

  if(symbol) {characterCode = characterCode.concat(symbolCharCode);
    choiceCount.push(3); 
    var charCode = symbolCharCode[Math.floor(Math.random()*symbolCharCode.length)];
    passwordCharacters.push(String.fromCharCode(charCode));
    }

  if(uppercase&&numeric) characterCode = characterCode.concat(uppercaseCharCode
  .concat(numberCharCode));
  if(uppercase&&symbol) characterCode = characterCode.concat(uppercaseCharCode
  .concat(symbolCharCode));
  if(uppercase&&numeric&&symbol) characterCode = characterCode.concat(uppercaseCharCode
  .concat(numberCharCode.concat(symbolCharCode)));
  if(numeric&&symbol) characterCode = characterCode.concat(numberCharCode.concat(symbolCharCode));
    
    var b=a-choiceCount.length
    for (var i=0; i<b; i++) {
    var charCode = characterCode[Math.floor(Math.random()*characterCode.length)];
    passwordCharacters.push(String.fromCharCode(charCode));
    }

    // shuffle the password character again
    var pw=[];
    var c=passwordCharacters.length;
    for (var i=0; i<c ; i++ ) {
      var index=Math.floor(Math.random()*passwordCharacters.length);
      var pwCharacter = passwordCharacters[index];
      pw.push(pwCharacter);
      passwordCharacters.splice(index,1)
    }

      var finalPassword=pw.join('')
    displayElement.innerHTML=finalPassword.toString();
  }   


