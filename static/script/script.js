document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const staticText = "Hi, I am "; // The static part
    const roles = ["Saad..", ".NET Developer", "Python Developer", "JavaScript Developer"]; // Roles to cycle through
    let roleIndex = 0; // Current role index
    let currentText = staticText; // Text being displayed
    let index = 0; // Current character index
    let typing = true; // Flag to check if we are typing or deleting

    function type() {
        if (typing) {
            // Typing phase
            if (index < roles[roleIndex].length) {
                textElement.innerHTML = currentText + roles[roleIndex].substring(0, index + 1);
                index++;
                setTimeout(type, 200); // Adjust typing speed (milliseconds)
            } else {
                // Once finished typing, move to delete phase
                typing = false;
                setTimeout(type, 1000); // Pause before starting to delete
            }
        } else {
            // Deleting phase
            if (index > 0) {
                textElement.innerHTML = currentText + roles[roleIndex].substring(0, index - 1);
                index--;
                setTimeout(type, 100); // Adjust deleting speed (milliseconds)
            } else {
                // Once finished deleting, move to the next role
                typing = true;
                roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
                index = 0; // Reset the character index for typing
                setTimeout(type, 500); // Pause before starting to type the next role
            }
        }
    }

    // Start typing
    type();
});
