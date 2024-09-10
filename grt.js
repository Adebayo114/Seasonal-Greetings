function submitForm() {
    console.log("Form submission started");

    // Get form elements
    let myname = document.getElementById('Name').value;
    let mysurname = document.getElementById('surname').value;
    let myoption = document.getElementById('List').value;
    let mrCheckbox = document.getElementById('mrCheckbox').checked;
    let mrsCheckbox = document.getElementById('mrsCheckbox').checked;
    let noneCheckbox = document.getElementById('none').checked;
    let sendTo = document.getElementById('who').value;

    // Validate form inputs
    if (myname === "" || mysurname === "" || myoption === "" || sendTo === "") {
        alert('Fields cannot be empty');
        return false; // Prevent form submission
    }

    console.log("Form validated successfully");

    // Ensure only one checkbox selection is valid
    if (noneCheckbox) {
        mrCheckbox = false;
        mrsCheckbox = false;
    }

    // Redirect to objects.html with form data in the URL
    const urlParams = new URLSearchParams({
        name: myname,
        surname: mysurname,
        option: myoption,
        mrCheckbox: mrCheckbox,
        mrsCheckbox: mrsCheckbox,
        noneCheckbox: noneCheckbox,
        who: sendTo
    });

    console.log("Redirecting to objects.html with URL parameters:", urlParams.toString());

    window.location.href = `objects.html?${urlParams.toString()}`;
    return false; // Prevent form submission
}

// Function to allow only one checkbox to be selected
function uncheckOthers(checkbox) {
    document.getElementById('mrCheckbox').checked = false;
    document.getElementById('mrsCheckbox').checked = false;
    document.getElementById('none').checked = false;
    checkbox.checked = true;
}
