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
