function submitForm() {
    // Get form elements
    let myname = document.getElementById('Name').value;
    let mysurname = document.getElementById('surname').value;
    let myemail = document.getElementById('email').value; // Still get the email, but we won't use it in the URL
    let myoption = document.getElementById('List').value;
    let mrCheckbox = document.getElementById('mrCheckbox').checked;
    let mrsCheckbox = document.getElementById('mrsCheckbox').checked;
    let sendTo = document.getElementById('who').value;

    // Validate form inputs
    if (myname === "" || mysurname === "" || myemail === "" || myoption === "" || sendTo === "") {
        alert('Fields cannot be empty');
        return false; // Prevent form submission
    }

    // Redirect to landing.html with form data in the URL, excluding the email
    const urlParams = new URLSearchParams({
        name: myname,
        surname: mysurname,
        option: myoption,
        mrCheckbox: mrCheckbox,
        mrsCheckbox: mrsCheckbox,
        who: sendTo
    });

    window.location.href = `objects.html?${urlParams.toString()}`;
    return false; // Prevent form submission
}