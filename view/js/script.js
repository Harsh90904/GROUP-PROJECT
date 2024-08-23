document.addEventListener('DOMContentLoaded', function () {
    // Start the loader animation
    const letters = document.querySelectorAll('.letters-loading');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.3}s`; // Stagger the animation
    });

    // Hide the loader after a certain time
    setTimeout(() => {
        document.querySelector('.loader-wrap').style.display = 'none';
    }, 3000); // Adjust time as needed
});
