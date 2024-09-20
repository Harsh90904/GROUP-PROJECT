document.addEventListener('DOMContentLoaded', function () {
    const letters = document.querySelectorAll('.letters-loading');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.3}s`; 
    });

    setTimeout(() => {
        document.querySelector('.loader-wrap').style.display = 'none';
    }, 3000);
    let id = document.cookie;
    let userId = id.split("=")[1];
    if (!userId) {
    window.location.href = "http://127.0.0.1:5500/view/login.html";
}
});
