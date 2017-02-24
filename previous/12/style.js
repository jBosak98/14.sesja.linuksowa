/*!
 * Based on Grayscale Bootstrap Theme (http://startbootstrap.com)
 * 2015 Kajetan Krykwiński
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 $(window).scroll(function() {
    if ($("#con-head").offset().top > 50) {
        $("#con-head").addClass("head-solid")
    } else {
        $("#con-head").removeClass("head-solid")
    }
});

//płynne przewijanie linków do czesci strony
$(function() {
    $("#con-head a, .smooth-scroll").click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
	$('#menu-container').addClass("mobile-hidden");
    return false;
});
});

$(function() {
    $("#menu-button").click(function(){
    $('#menu-container').toggleClass("mobile-hidden");
    return false;
});
});


//zmiana tła głównego
//based on code by CrocoDillon https://css-tricks.com/forums/topic/change-body-background-every-10-sec/
$(function() {
	var body = $("#con-description");
	var delay = 6000;
	var backgrounds = new Array(
	"url(img/tla/bg_top.jpg)",
	"url(img/tla/bg_top_2.jpg)",
	"url(img/tla/bg_top_3.jpg)",
	"url(img/tla/bg_top_4.jpg)",
	"url(img/tla/bg_top_5.jpg)"
	);
	var current = 0;

	function nextBackground() {
		body.css("background-image",	backgrounds[current = ++current % backgrounds.length]);
		setTimeout(nextBackground, delay);
		}

	setTimeout(nextBackground, delay);
	});

//mapy googla
google.maps.event.addDomListener(window, "load", init);
function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(51.108129, 17.074314),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
    };
    var mapElement = document.getElementById("map");
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = "img/map-marker.png";
    var myLatLng = new google.maps.LatLng(51.108129, 17.074314);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    })
};
