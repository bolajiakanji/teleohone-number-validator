let userInput = document.getElementById("user-input").value
let checkBtn = document.getElementById("check-btn")
let clearBtn = document.getElementById("clear-btn")
let output = document.getElementById("output").innerHTML

function validitate(input) {
    let regex=/^(1\s?)?(\(\d{3}\)\s?\d{3}-|\d{3}\s?\d{3}\s?|\d{3}-\d{3}-)\d{4}$/g
    return regex.test(input);
  }
  
function numberValidity() {
    if (userInput === "") {
     alert("please provide a phone number")
    } else {
        if (validitate(userInput)) {
            output = `Invalid US number: ${userInput}`
        } else {
            output = `Valid US number: ${userInput}`
        }
    }
    userInput=""
 }

 function clear() {
    userInput=""
 }