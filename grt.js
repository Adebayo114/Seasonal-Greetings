// Function to handle form submission
function submitForm() {
    // Get form elements
    let myname = document.getElementById('Name').value;
    let mysurname = document.getElementById('surname').value;
    let myoption = document.getElementById('List').value;
    let mrCheckbox = document.getElementById('mrCheckbox').checked;
    let mrsCheckbox = document.getElementById('mrsCheckbox').checked;
    let none = document.getElementById('none').checked;
    let sendTo = document.getElementById('who').value;

    // Validate form inputs
    if (myname === "" || mysurname === "" || myoption === "" || sendTo === "") {
        alert('Fields cannot be empty');
        return false; // Prevent form submission
    }

    // Save form data to localStorage
    localStorage.setItem('name', myname);
    localStorage.setItem('surname', mysurname);
    localStorage.setItem('option', myoption);
    localStorage.setItem('mrCheckbox', mrCheckbox);
    localStorage.setItem('mrsCheckbox', mrsCheckbox);
    localStorage.setItem('none', none);
    localStorage.setItem('who', sendTo);

    // Redirect to landing page
    window.location.href = `objects.html`;
    return false; // Prevent default form submission behavior
}
