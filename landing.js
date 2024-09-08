window.onload = function () {
    // Retrieve form data from localStorage
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const option = localStorage.getItem('option');
    const mrCheckbox = localStorage.getItem('mrCheckbox') === 'true'; // Convert to boolean
    const mrsCheckbox = localStorage.getItem('mrsCheckbox') === 'true'; // Convert to boolean
    const none = localStorage.getItem('none') === 'true'; // Convert to boolean
    const sendTo = localStorage.getItem('who');

    // Elements to display dynamic content
    const greetingContainer = document.getElementById('greetingContainer');
    const identificationContainer = document.getElementById('identification');
    const sendToContainer = document.getElementById('sendTo');
    const headContainer = document.querySelector('.head-container');

    // Ensure all required fields are filled
    if (name && surname && option && sendTo) {
        let greetingText = option;

        // Determine identification text based on the selected options
        let identificationText = '';
        if (none) {
            identificationText = `${name} ${surname}`; // Only show name if 'None' is checked
        } else {
            identificationText = `${mrCheckbox ? 'Mr ' : ''}${mrsCheckbox ? 'Mrs ' : ''}${name} ${surname}`;
        }

        let sendToText = sendTo;

        // Update the HTML content dynamically
        greetingContainer.innerHTML = greetingText;
        identificationContainer.innerHTML = identificationText;
        sendToContainer.innerHTML = sendToText;

        // Set the appropriate background image class
        setGreetingBackground(option, headContainer);

        // Generate WhatsApp link after content is set
        generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo);
    } else {
        greetingContainer.innerHTML = 'Please fill up the recommended procedures';
    }
};

// Function to set the background image class based on the selected option
function setGreetingBackground(option, container) {
    // Clear any existing background classes
    container.className = 'head-container';

    // Map selected options to specific background classes
    const backgrounds = {
        "Happy Birthday": 'happy-birthday-bg',
        "Happy New Year": 'happy-new-year-bg',
        "Happy Valentine's Day": 'happy-valentines-day-bg',
        "Happy Easter": 'happy-easter-bg',
        "Happy Halloween": 'happy-halloween-bg',
        "Happy Mother's Day": 'happy-mothers-day-bg',
        "Happy Father's Day": 'happy-fathers-day-bg',
        "Happy Children's Day": 'happy-childrens-day-bg',
        "Merry Christmas": 'merry-christmas-bg',
        "Happy Boxing Day": 'happy-boxing-day-bg',
        "Happy Ed-al-Kabir": 'happy-ed-al-kabir-bg',
        "Happy Ed-al-Fitr": 'happy-ed-al-fitr-bg',
        "Happy Graduation Day": 'happy-graduation-day-bg',
        "Keep Up the Good Work": 'keep-up-the-good-work-bg',
        "Eid-al-Maulud": 'eid-al-maulud-bg',
        "Happy Independence Day": 'happy-independence-day-bg',
        "Happy Democracy Day": 'happy-democracy-day-bg',
        "Happy Worker's Day": 'happy-workers-day-bg'
    };

    // Apply the matching class or a default if no match is found
    container.classList.add(backgrounds[option] || 'default-bg');
}

// Function to generate dynamic WhatsApp link
function generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo) {
    // Create the WhatsApp link using current page URL
    let whatsappLink = `https://wa.me/?text=Check%20out%20this%20greeting%20I%20sent%20you:%20${encodeURIComponent(window.location.href)}`;

    // Update the WhatsApp link in the DOM
    document.getElementById("whatsapp").querySelector("a").setAttribute("href", whatsappLink);
}
