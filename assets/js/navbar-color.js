$(document).ready(function () {
    checkNavbarClasses(); // Call the function on document ready

    // Call the function whenever the window is resized
    $(window).resize(function () {
        checkNavbarClasses();
    });

    // Call the function whenever the window is scrolled
    $(window).scroll(function () {
        checkNavbarClasses();
    });

    function checkNavbarClasses() {
        var navbar = $(".navbar");

        // Check if the navbar does not have the specified classes
        if (!navbar.hasClass("bg-white") && !navbar.hasClass("shadow-lg")) {
            // If the classes are not present, set nav-link color to white
            $(".nav-link").addClass("text-white");
        } else {
            // Reset nav-link color to its default value
            $(".nav-link").removeClass("text-white").addClass("text-dark");
        }
    }
});