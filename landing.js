// Retrieve data from localStorage
const name = localStorage.getItem("name");
const surname = localStorage.getItem("surname");
const listChoice = localStorage.getItem("listChoice");
const isMrChecked = localStorage.getItem("isMrChecked") === "true";
const isMrsChecked = localStorage.getItem("isMrsChecked") === "true";

// Clear localStorage after retrieving data (optional)
localStorage.clear();

// Create a greeting message based on the retrieved data
let greeting = `Hello, ${name} ${surname}!<br>`;

if (isMrChecked) {
    greeting += `Happy ${listChoice}, Mr. ${surname}!<br>`;
} else if (isMrsChecked) {
    greeting += `Happy ${listChoice}, Mrs. ${surname}!<br>`;
} else {
    greeting += `Happy ${listChoice}, ${name} ${surname}!<br>`;
}

// Insert the greeting message into the "greetingContainer" div
document.getElementById("greetingContainer").innerHTML = greeting;
