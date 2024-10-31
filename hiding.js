let element = document.getElementById("contact-link");
var contactSection = document.getElementById("mesaj");
element.addEventListener("click", function(event) {
    if  (contactSection.style.display = "none") {
        contactSection.style.display = "block";
    } else {
        contactSection.style.display = "none";
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
});


// Add an event listener to the form with the ID 'contactForm'
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields with IDs 'name' and 'message'
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const baseURL = process.env.BASE_URL || 'http://localhost:3000';


    // Send the form data to the server using the Fetch API
    fetch('${baseURL}/send-email', { // Changeable: The endpoint URL
        method: 'POST', // Pre-configured: The HTTP method
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // Pre-configured: The content type
        },
        body: new URLSearchParams({ // Pre-configured: The format of the body
            name: name, // Changeable: The form field name
            message: message // Changeable: The form field name
        })
    })
    .then(response => response.text()) // Pre-configured: Handling the response
    .then(data => {
        alert(data); // Changeable: What to do with the response
        contactSection.style.display = 'none'; // Changeable: What to do after submission
    })
    .catch(error => {
        console.error('Error:', error); // Pre-configured: Error handling
    });
});
