window.onload = function () {
    const urlLink = new URLSearchParams(window.location.search);
    const name = urlLink.get('name');
    const surname = urlLink.get('surname');
    const option = urlLink.get('option');
    const mrCheckbox = urlLink.get('mrCheckbox') === 'true'; // Convert to boolean
    const mrsCheckbox = urlLink.get('mrsCheckbox') === 'true'; // Convert to boolean
    const noneCheckbox = urlLink.get('noneCheckbox') === 'true'; // Convert to boolean
    const sendTo = urlLink.get('who');

    const greetingContainer = document.getElementById('greetingContainer');
    const identificationContainer = document.getElementById('identification');
    const sendToContainer = document.getElementById('sendTo');
    
    const headContainer = document.querySelector('.head-container');

    if (name && surname && option && sendTo) {
        let greetingText = option;

        // Adjust the identification text based on checkbox states
        let identificationText = `${noneCheckbox ? '' : (mrCheckbox ? 'Mr' : '')} ${noneCheckbox ? '' : (mrsCheckbox ? 'Mrs' : '')} ${name} ${surname}`;
        let sendToText = sendTo;

        greetingContainer.innerHTML = greetingText;
        identificationContainer.innerHTML = identificationText;
        sendToContainer.innerHTML = sendToText;

        // Apply the appropriate background image class
        setGreetingBackground(option, headContainer);

        // Generate WhatsApp link after content is set
        generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo);
    } else {
        greetingContainer.innerHTML = 'Please fill up the recommended procedures';
    }
};

// Function to set the background image class
function setGreetingBackground(option, container) {
    // Remove all existing background classes
    container.className = 'head-container';

    // Determine the class to add based on the option
    switch (option) {
        case "Happy Birthday":
            container.classList.add('happy-birthday-bg');
            break;
        case "Happy New Year":
            container.classList.add('happy-new-year-bg');
            break;
        case "Happy Valentine's Day":
            container.classList.add('happy-valentines-day-bg');
            break;
        case "Happy Easter":
            container.classList.add('happy-easter-bg');
            break;
        case "Happy Halloween":
            container.classList.add('happy-halloween-bg');
            break;
        case "Happy Mother's Day":
            container.classList.add('happy-mothers-day-bg');
            break;
        case "Happy Father's Day":
            container.classList.add('happy-fathers-day-bg');
            break;
        case "Happy Children's Day":
            container.classList.add('happy-childrens-day-bg');
            break;
        case "Merry Christmas":
            container.classList.add('merry-christmas-bg');
            break;
        case "Happy Boxing Day":
            container.classList.add('happy-boxing-day-bg');
            break;
        case "Happy Ed-al-Kabir":
            container.classList.add('happy-ed-al-kabir-bg');
            break;
        case "Happy Ed-al-Fitr":
            container.classList.add('happy-ed-al-fitr-bg');
            break;
        case "Happy Graduation Day":
            container.classList.add('happy-graduation-day-bg');
            break;
        case "Keep Up the Good Work":
            container.classList.add('keep-up-the-good-work-bg');
            break;
        case "Eid-al-Maulud":
            container.classList.add('eid-al-maulud-bg');
            break;
        case "Happy Independence Day":
            container.classList.add('happy-independence-day-bg');
            break;
        case "Happy Democracy Day":
            container.classList.add('happy-democracy-day-bg');
            break;
        case "Happy Worker's Day":
            container.classList.add('happy-workers-day-bg');
            break;
        default:
            container.classList.add('default-bg'); // Fallback if no match is found
            break;
    }
}

function generateWhatsAppLink(name, surname, option, mrCheckbox, mrsCheckbox, sendTo) {
    const baseUrl = "https://api.whatsapp.com/send";
    
    // Construct the greeting message
    let greeting = `${option}!`;  // Use the selected option (e.g., "Happy Birthday!")
    let identification = `${mrCheckbox ? "Mr" : ""} ${mrsCheckbox ? "Mrs" : ""} ${name} ${surname}`.trim();
    let message = `Hello ${sendTo}, ${greeting} from ${identification}.`;

    // Encode the message for use in a URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the full WhatsApp link
    const whatsappLink = `${baseUrl}?text=${encodedMessage}`;

    // Set the WhatsApp link in the appropriate element
    const whatsappLinkElement = document.querySelector("#whatsapp a");
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappLink;
    }
}
