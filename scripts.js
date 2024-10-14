// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const images = document.querySelectorAll('.image-slider .image-wrapper'); // Select all image wrappers
    const slider = document.querySelector('.image-slider'); // Select the slider container
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicators = document.querySelectorAll('.indicator'); // Select all indicators

    let currentIndex = 0; // Track the current image index
    const totalImages = images.length; // Total number of images in the slider
    const imageWidth = 900; // The width of each image should match the width set in CSS

    // Function to update the slider position and indicator highlight
    function updateSlider() {
        // Calculate the offset and apply transformation to the slider
        const offset = -currentIndex * imageWidth;
        slider.style.transform = `translateX(${offset}px)`;

        // Update the indicator highlights
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active'); // Highlight the active indicator
            } else {
                indicator.classList.remove('active'); // Remove highlight from others
            }
        });
    }

    // Event listener for the "Previous" button
    prevButton.addEventListener('click', () => {
        // Move to the previous image, wrap around if necessary
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateSlider();
    });

    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
        // Move to the next image, wrap around if necessary
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Initial slider setup
    updateSlider();

    // Optional: Allow indicators to navigate directly to a specific image
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index; // Set current index to the clicked indicator
            updateSlider();
        });
    });
});

function togglePassword(inputId) {
    const inputField = document.getElementById(inputId);
    const toggleButton = event.currentTarget; // Get the button that triggered the event

    // Check the current type of the input field
    if (inputField.type === "password") {
        inputField.type = "text"; // Change to text to show password
        toggleButton.textContent = "Hide"; // Change button text
    } else {
        inputField.type = "password"; // Change back to password to hide
        toggleButton.textContent = "Show"; // Change button text
    }
}
