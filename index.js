document.getElementById("tripForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let gender = document.getElementById("gender").value.trim();
    let description = document.getElementById("desc").value.trim();

    if (!name || !age || !email || !gender || !description) {
        alert("All fields are required!");
        return;
    }

    // Capture form data
    let formData = new FormData(this);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/project/index.php", true); // Corrected URL

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert("Form submitted successfully!");
            console.log("Response:", xhr.responseText);
            // Clear form fields after successful submission
            document.getElementById("tripForm").reset();
        } else {
            alert("Error submitting form.");
            console.error("Error:", xhr.statusText);
        }
    };

    xhr.onerror = function () {
        alert("Request failed.");
    };

    xhr.send(formData);
});
