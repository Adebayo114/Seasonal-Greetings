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

        // Add more conditions for other options...

        greetingContainer.innerHTML = greetingText;
        identificationContainer.innerHTML = identificationText;
        sendToContainer.innerHTML = sendToText;
    } else {
        greetingContainer.innerHTML = 'Please fill up the recommended procedures';
    }
};



    // Function to generate dynamic WhatsApp link
    function generateWhatsAppLink() {
        // Get user input or data (example values)
        let name = "adebayo";
        let surname = "matthew";
        let email = "matthewadebayo392@gmail.com";
        let option = "Happy Birthday";
        let mrCheckbox = "false";
        let mrsCheckbox = "false";
        let who = "Adebayo Zainab";

        // Construct WhatsApp link with dynamic query parameters
        let whatsappLink = `https://wa.me/?text=Check%20out%20this%20greeting%20website:%20${window.location.origin}/landing.html?name=${name}&surname=${surname}&email=${email}&option=${option}&mrCheckbox=${mrCheckbox}&mrsCheckbox=${mrsCheckbox}&who=${who}`;

        // Set href attribute of WhatsApp link
        document.getElementById("whatsapp").querySelector("a").setAttribute("href", whatsappLink);
    }

    // Call the function to generate WhatsApp link
    generateWhatsAppLink();
