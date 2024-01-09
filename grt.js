// const formEL = document.getElementById('form')
// const emailInput = document.getElementById("email")

// formEL.addEventListener("submit",function(e){
//     e.preventDefault()
//     let userEmail = emailInput.value
//     console.log(userEmail)
// })

function submitForm() {
    // Get form elements
    let myname = document.getElementById('Name').value;
    let mysurname = document.getElementById('surname').value;
    let myemail = document.getElementById('email').value;
    let myoption = document.getElementById('List').value;
    let mrCheckbox = document.getElementById('mrCheckbox').checked;
    let mrsCheckbox = document.getElementById('mrsCheckbox').checked;
    let sendTo = document.getElementById('who').value;

    // Validate form inputs
    if (myname === "" || mysurname === "" || myemail === "" || myoption === ""|| sendTo === "") {
        alert('Fields cannot be empty');
        return false; // Prevent form submission
    }

    // Redirect to landing.html with form data in the URL
    const urlParams = new URLSearchParams({
        name: myname,
        surname: mysurname,
        email: myemail,
        option: myoption,
        mrCheckbox: mrCheckbox,
        mrsCheckbox: mrsCheckbox,
        who: sendTo // Use the same name 'Who' as in the landing page
    });
    

    window.location.href = `landing.html?${urlParams.toString()}`;

    return false; // Prevent form submission
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