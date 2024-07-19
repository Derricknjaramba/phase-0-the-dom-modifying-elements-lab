let main = document.querySelector('#main');
if (main) {
    main.remove();
}

// Create a new <h1> element
let newHeader = document.createElement('h1');

// Set id and text content
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append newHeader to the document body or another appropriate parent element
document.body.appendChild(newHeader);