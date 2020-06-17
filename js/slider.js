$(document).ready(function () {
    var slideIndex = 1;
    displaySlides(slideIndex);

    addSlides = (n) => {
        displaySlides(slideIndex += n);
    }

    currentSlide = (n) => {
        displaySlides(slideIndex = n);
    }

    function displaySlides(n) {
        var slides = $(".img-container");
        var dots = $(".dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
});