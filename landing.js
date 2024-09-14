window.onload = function () {
    // Get the query parameters from the URL
    const urlLink = new URLSearchParams(window.location.search);
    const name = urlLink.get('name');
    const surname = urlLink.get('surname');
    const option = urlLink.get('option');
    const mrCheckbox = urlLink.get('mrCheckbox') === 'true';
    const mrsCheckbox = urlLink.get('mrsCheckbox') === 'true';
    const noneCheckbox = urlLink.get('noneCheckbox') === 'true';
    const sendTo = urlLink.get('who');

    // Cache DOM elements to avoid multiple lookups
    const greetingContainer = document.getElementById('greetingContainer');
    const identificationContainer = document.getElementById('identification');
    const sendToContainer = document.getElementById('sendTo');
    const headContainer = document.querySelector('.head-container');

    // Check if all required data is available
    if (name && surname && option && sendTo) {
        // Determine the title based on checkbox selection
        let title = '';
        if (mrCheckbox) {
            title = 'Mr.';
        } else if (mrsCheckbox) {
            title = 'Mrs.';
        }

        // Prepare the identification text
        const identificationText = `${title} ${name} ${surname}`.trim();
        const sendToText = sendTo;

        // Update the content in the HTML
        greetingContainer.innerHTML = option;  // Display the greeting (option)
        identificationContainer.innerHTML = identificationText;  // Display the full name with title
        sendToContainer.innerHTML = sendToText;  // Display who the greeting is for

        // Set the appropriate background based on the greeting option
        setGreetingBackground(option, headContainer);
                // Function to set the background image class based on the greeting option
            function setGreetingBackground(option, container) {
                const backgrounds = {
                    "Happy Birthday": "happy-birthday-bg",
                    "Happy New Year": "happy-new-year-bg",
                    "Happy Valentine's Day": "happy-valentines-day-bg",
                    "Happy Easter": "happy-easter-bg",
                    "Happy Halloween": "happy-halloween-bg",
                    "Happy Mother's Day": "happy-mothers-day-bg",
                    "Happy Father's Day": "happy-fathers-day-bg",
                    "Happy Children's Day": "happy-childrens-day-bg",
                    "Merry Christmas": "merry-christmas-bg",
                    "Happy Boxing Day": "happy-boxing-day-bg",
                    "Happy Ed-al-Kabir": "happy-ed-al-kabir-bg",
                    "Happy Ed-al-Fitr": "happy-ed-al-fitr-bg",
                    "Happy Graduation Day": "happy-graduation-day-bg",
                    "Keep Up the Good Work": "keep-up-the-good-work-bg",
                    "Eid-al-Maulud": "eid-al-maulud-bg",
                    "Happy Independence Day": "happy-independence-day-bg",
                    "Happy Democracy Day": "happy-democracy-day-bg",
                    "Happy Worker's Day": "happy-workers-day-bg"
                };

    // Remove all existing background classes
    container.className = 'head-container';
    // Add the background class corresponding to the selected option
    container.classList.add(backgrounds[option] || 'default-bg');
}

        // Generate WhatsApp link with the page URL
        generateWhatsAppLink(urlLink, name, surname, option, mrCheckbox, mrsCheckbox, sendTo);
    } else {
        // Show error message if required data is missing
        greetingContainer.innerHTML = 'Please fill up the recommended procedures';
    }
};

// Function to generate the WhatsApp link with the current page URL
function generateWhatsAppLink(urlLink, name, surname, option, mrCheckbox, mrsCheckbox, sendTo) {
    const noneCheckbox = urlLink.get('noneCheckbox') === 'true'; // Ensure 'noneCheckbox' is also handled

    // Determine the title based on checkbox selection
    let title = '';
    if (mrCheckbox) {
        title = 'Mr.';
    } else if (mrsCheckbox) {
        title = 'Mrs.';
    }

    const identificationText = `${title} ${name} ${surname}`.trim();

    // Generate the full URL of the current page with query parameters
    const currentUrl = window.location.href;

    // The message to send, including the link to this personalized page
    const message = `Check out this greeting for ${sendTo}: ${currentUrl}`;
    
    // Encode the message and URL
    const whatsappMessage = encodeURIComponent(message);
    
    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;
    
    // Set the WhatsApp link in the anchor tag
    const whatsappAnchor = document.getElementById('whatsappLink');
    whatsappAnchor.href = whatsappLink;
    
    // Add a click listener for debugging (optional)
    whatsappAnchor.addEventListener('click', function() {
        console.log('WhatsApp link clicked');
    });
}
