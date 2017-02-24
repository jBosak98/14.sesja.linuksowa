/*!
 * Based on Grayscale Bootstrap Theme (http://startbootstrap.com)
 * 2015-16 Kajetan Krykwiński
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(window).scroll(function()
{
  if ($("#con-head").offset().top > 50)
  {
    $("#con-head").addClass("head-solid")
  }
  else
  {
    $("#con-head").removeClass("head-solid")
  }
});

//płynne przewijanie linków do czesci strony
$(function()
{
  $("#con-head a, .smooth-scroll").click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    $('#menu-container').addClass("mobile-hidden");
    return false;
  });
});

$(function()
{
  $("#menu-button").click(function()
  {
    $('#menu-container').toggleClass("mobile-hidden");
    return false;
  });
});

function replaceForm(form_text, form_id="#form_rejestracja")
{
  $( form_id ).replaceWith( '<p style="text-align: center; font-weight: bold; color: #F00">' + form_text + '</p>' );
}

$(document).ready(function() {
  var frm = $('#form_rejestracja');
  frm.submit(function (ev)
  {
    $.ajax(
    {
      type: frm.attr('method'),
      url: frm.attr('action'),
      data: frm.serialize(),
      error: function(request, textStatus, errorThrown)
      {
        var err_registered = "Ten adres został juz zarejestrowany";
        var err_unknown = "Wystąpił błąd. Prosimy spróbować ponownie, a jeśli się powtórzy - skontaktować się z nami.";

        if(window.location.href.indexOf("en") > -1) //wersja ang strony
        {
          err_registered = "This adress has been submitted already!";
          err_unknown = "An error occured! Please try again, and if the issue still persists - contact us.";
        }

        if(request.status == 400)
        {
          replaceForm(err_registered);
        }
        else
        {
          replaceForm(err_unknown);
        }
      },
      success: function (data)
      {
        var err_success = "Dziękujemy za rejestrację!";
        if(window.location.href.indexOf("en") > -1) //wersja ang strony
        {
          err_success = "Thank you for signing up!";
        }
          replaceForm(err_success);
      }
    });
    ev.preventDefault();
  });
});

//mapy googla
google.maps.event.addDomListener(window, "load", init);
function init()
{
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(51.108828, 17.056726),
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  };
  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(51.108828, 17.056726);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  })
}; 


//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-73387544-1', 'auto');
ga('send', 'pageview');

