let userInput = document.getElementById("user-input")

let checkBtn = document.getElementById("check-btn")
let clearBtn = document.getElementById("clear-btn")
let output = document.getElementById("results-div")

function validitate(input) {
    let regex=/^(1\s?)?(\(\d{3}\)\s?\d{3}-|\d{3}\s?\d{3}\s?|\d{3}-\d{3}-)\d{4}$/g
    return regex.test(input);
  }
  
function numberValidity() {
    let f = userInput.value
    console.log(f)
    if (f === "") {
        console.log(userInput)
     alert("please provide a phone number")
    } else {
        if (validitate(f)) {
           
            output.innerHTML = `Valid US number: ${f}`
        } else {
            output.innerHTML = `Invalid US number: ${f}`
        }
    }
    userInput.value="";
    console.log("click")
    
 }

 function clearb() {
    console.log("clear")
    output.innerHTML=""
    userInput.value = ""
    
 }