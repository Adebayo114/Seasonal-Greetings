// const formEL = document.getElementById('form')
// const emailInput = document.getElementById("email")

// formEL.addEventListener("submit",function(e){
//     e.preventDefault()
//     let userEmail = emailInput.value
//     console.log(userEmail)
// })


    function submitForm() {
        // Get form elements
        const name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const surname = document.getElementById("surname").value;
        const listChoice = document.getElementById("List").value;
        const isMrChecked = document.getElementById("mr").checked;
        const isMrsChecked = document.getElementById("mrs").checked;

        // Store data in localStorage (you can also use cookies, sessionStorage, or other methods)
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("surname", surname);
        localStorage.setItem("listChoice", listChoice);
        localStorage.setItem("isMrChecked", isMrChecked);
        localStorage.setItem("isMrsChecked", isMrsChecked);

        return true; // Allow the form to be submitted
    }



// JavaScript to handle dynamic content change
const greetings = [
    "Happy Birthday",
    "Happy New Year",
    "Happy Easter",
    "Happy Eid"
    // Add other greetings as needed
];

let currentIndex = 0;

function changeGreeting() {
    const select = document.getElementById("List");
    const greetingText = document.getElementById("greetingText");

    if (select.selectedIndex !== 0) {
        greetingText.textContent = greetings[select.selectedIndex - 1];
        currentIndex = select.selectedIndex - 1;
    }
}

function switchGreeting() {
    const greetingText = document.getElementById("greetingText");
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingText.textContent = greetings[currentIndex];
}

// Switch greetings every 3 seconds
setInterval(switchGreeting, 3000);