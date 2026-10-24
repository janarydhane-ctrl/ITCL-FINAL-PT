
document.addEventListener("DOMContentLoaded", function () {

    // Get contact form elements
    const form = document.getElementById("contactForm");

    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const feedback = document.getElementById("feedback");
    const charCount = document.getElementById("charCount");

    // Maximum message length
    const maxCharacters = 500;

    // Display feedback messages
    function showFeedback(text, color) {
        feedback.textContent = text;
        feedback.style.color = color;
    }

    // Live character counter
    message.addEventListener("input", function () {

        const currentLength = message.value.length;

        charCount.textContent =
            currentLength + " / " + maxCharacters + " characters";

        if (currentLength >= maxCharacters) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "gray";
        }

    });

    // Contact form submission
    form.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Retrieve user input
        const fname = firstName.value.trim();
        const lname = lastName.value.trim();
        const userEmail = email.value.trim();
        const userMessage = message.value.trim();

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if fields are empty
        if (
            fname === "" ||
            lname === "" ||
            userEmail === "" ||
            userMessage === ""
        ) {
            showFeedback(
                "Please complete all the required fields.",
                "red"
            );
            return;
        }

        // Validate email
        if (!emailPattern.test(userEmail)) {
            showFeedback(
                "Please enter a valid email address.",
                "red"
            );
            return;
        }

        // Validate message length
        if (userMessage.length < 10) {
            showFeedback(
                "Your message must contain at least 10 characters.",
                "red"
            );
            return;
        }

        // Successful validation
        showFeedback(
            "Thank you, " + fname + " " + lname +
            "! Your form has been successfully validated.",
            "green"
        );

        // Personalized confirmation
        alert(
            "Hello, " + fname + "!\n\n" +
            "Thank you for visiting our Football Website!\n" +
            "Your contact form has been successfully validated."
        );

        // Reset the form
        form.reset();

        // Reset character counter
        charCount.textContent = "0 / 500 characters";
        charCount.style.color = "gray";

    });

});

