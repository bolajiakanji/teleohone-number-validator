let userInput = document.getElementById("user-input").value
let checkButton = document.getElementById("user-input").value
let clearButton = document.getElementById("user-input").value
le
function telephoneCheck(str) {
    let a=/^(1\s?)?(\(\d{3}\)\s?\d{3}-|\d{3}\s?\d{3}\s?|\d{3}-\d{3}-)\d{4}$/g
    return a.test(str);
  }
  
function checkButton() {
    if (userInput === "") {
     alert("please provide a phone number")
    }
 }