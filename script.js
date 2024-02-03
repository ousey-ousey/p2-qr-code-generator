let imgbox = document.getElementById("imgtext");
let imgqr = document.getElementById("qr-image");
let imgtext = document.getElementById("qrInput");

function createQR() {
    // Remove any existing error message
    let existingError = document.getElementById("error-message");
    if (existingError) {
        existingError.remove();
    }

    // Check if imgtext has a value
    if (imgtext.value === "") {
        // Display error message
        let error = document.createElement("p");
        error.id = "error-message";
        error.innerHTML = "Please enter some text to generate QR code";
        imgbox.appendChild(error);

        // Hide QR code
        imgqr.style.display = "none";
        imgbox.style.display = "flex";
    } else {
        // Create and display QR code
        imgqr.src = "http://api.qrserver.com/v1/create-qr-code/?data=" + imgtext.value;
        imgqr.style.display = "block";
        imgbox.style.display = "flex";
    }
}
