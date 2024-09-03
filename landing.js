window.onload = function () {
    const urlLink = new URLSearchParams(window.location.search);
    const name = urlLink.get('name');
    const surname = urlLink.get('surname');
    const option = urlLink.get('option');
    const mrCheckbox = urlLink.get('mrCheckbox') === 'true'; // Convert to boolean
    const mrsCheckbox = urlLink.get('mrsCheckbox') === 'true'; // Convert to boolean
    const sendTo = urlLink.get('who');

    const greetingContainer = document.getElementById('greetingContainer');
    const identificationContainer = document.getElementById('identification');
    const sendToContainer = document.getElementById('sendTo');

    if (name && surname && option && sendTo) {
        let greetingText = option;
        let identificationText = `${mrCheckbox ? 'Mr' : ''} ${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname}`;
        let sendToText = sendTo;

        greetingContainer.innerHTML = greetingText;
        identificationContainer.innerHTML = identificationText;
        sendToContainer.innerHTML = sendToText;

        // Generate WhatsApp link after content is set
        generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo);
    } else {
        greetingContainer.innerHTML = 'Please fill up the recommended procedures';
    }
};

// Function to generate dynamic WhatsApp link
function generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo) {
    // Construct WhatsApp link with dynamic query parameters
    let whatsappLink = `https://wa.me/?text=Check%20out%20this%20greeting%20I%20sent%20you:%20${encodeURIComponent(window.location.href)}`;

    // Set href attribute of WhatsApp link
    document.getElementById("whatsapp").querySelector("a").setAttribute("href", whatsappLink);
}
