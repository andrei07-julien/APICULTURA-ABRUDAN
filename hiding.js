let element = document.getElementById("contact-linkkk");
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