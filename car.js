document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    // Thumbnail image controls
    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0) {
            console.error("Error: No slides found! Check your HTML.");
            return;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }

    // Auto slide
    setInterval(() => {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds
});
