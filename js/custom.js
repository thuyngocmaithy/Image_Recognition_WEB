// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function () {
    $('#setting-step-1').on("click", function () {
        var display = $('#container-setting-step-1').css('display');
        console.log(display);
        if (display === 'block') {
            $('#container-setting-step-1').css('display', 'none');
        }
        else {
            $('#container-setting-step-1').css('display', 'block');
        }
    })
    $('#setting-step-2').on("click", function () {
        var display = $('#container-setting-step-2').css('display');
        console.log(display);
        if (display === 'block') {
            $('#container-setting-step-2').css('display', 'none');
        }
        else {
            $('#container-setting-step-2').css('display', 'block');
        }
    })
    $('#setting-step-3').on("click", function () {
        var display = $('#container-setting-step-3').css('display');
        console.log(display);
        if (display === 'block') {
            $('#container-setting-step-3').css('display', 'none');
        }
        else {
            $('#container-setting-step-3').css('display', 'block');
        }
    })
    $('#setting-step-4').on("click", function () {
        var display = $('#container-setting-step-4').css('display');
        console.log(display);
        if (display === 'block') {
            $('#container-setting-step-4').css('display', 'none');
        }
        else {
            $('#container-setting-step-4').css('display', 'block');
        }
    })
})