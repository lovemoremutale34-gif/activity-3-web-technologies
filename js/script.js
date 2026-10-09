/* ICT251 Activity 3: Interactive Personal Website */

// Get the contact form elements
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
const formPreview = document.getElementById("form-preview");

// Check that the required HTML elements exist
if (contactForm && formFeedback && formPreview) {

    // Handle contact form submission
    contactForm.addEventListener("submit", function (event) {

        // Stop the page from reloading
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous messages and preview
        formFeedback.textContent = "";
        formPreview.textContent = "";
        formPreview.hidden = true;

        // Validate the name
        if (name === "") {
            formFeedback.textContent = "Please enter your name.";
            return;
        }

        // Validate the email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent = "Please enter a valid email address.";
            return;
        }

        // Validate the message
        if (message === "") {
            formFeedback.textContent = "Please enter a message.";
            return;
        }

        // Display a local preview of the submitted details
        formPreview.textContent =
            "Preview - your details were validated, but no message was sent. " +
            "Name: " + name +
            " | Email: " + email +
            " | Topic: " + topic +
            " | Message: " + message;

        // Show the preview and success feedback
        formPreview.hidden = false;
        formFeedback.textContent =
            "Your form details passed validation.";
    });

} else {
    console.error(
        "Contact form elements not found. Check the HTML IDs."
    );
}
/* dark and light mode toggle */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });
}
const readMoreBtn = document.getElementById("read-more-btn");
const extrainfo = document.getElementById("extra-info");

readMoreBtn.addEventListener("click", function () {
    if (extrainfo.hidden) {
        extrainfo.hidden = false;
        readMoreBtn.textContent = "Read Less";
    } else {
        extrainfo.hidden = true;
        readMoreBtn.textContent = "Read More";
    }
}); 
/* Project search and filter feature */
const projectSearch = document.getElementById("project-search");
const resetSearch = document.getElementById("reset-search");
const searchMessage = document.getElementById("search-message");

if (projectSearch && resetSearch && searchMessage) {
    // Find the skills list beside the search controls.
    const projectSection = projectSearch.closest("section");
    const skillItems = projectSection.querySelectorAll("ul li");

    // Show only skills that match the search.
    function filterProjects() {
        const searchTerm = projectSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        skillItems.forEach(function (item) {
            const matches = item.textContent.toLowerCase()
                .includes(searchTerm);

            item.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        if (visibleCount === 0) {
            searchMessage.textContent =
                "No matching projects or skills found.";
        } else {
            searchMessage.textContent =
                visibleCount + " skill(s) found.";
        }
    }

    projectSearch.addEventListener("input", filterProjects);

    // Clear the search and show all skills again.
    resetSearch.addEventListener("click", function () {
        projectSearch.value = "";
        filterProjects();
    });
}
