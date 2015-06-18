google.maps.event.addDomListener(window, 'load', init_mrt);

$('#mrt').click(function() {
    setTimeout(function(){
        google.maps.event.trigger(map_mrt, 'resize');
        map_mrt.setCenter(mrtLatlng);
    }, 250)
});

function init_mrt() {
    
    mrtLatlng = new google.maps.LatLng(52.536087, 13.601775);
    
    var mapOptions = {
        center: mrtLatlng,
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
    }
    
    var mapElement = document.getElementById('map-mrt');
    map_mrt = new google.maps.Map(mapElement, mapOptions);
    
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading hidden-xs">Dr. med. Sabine Dickert</h1>'+
    '<div id="bodyContent">'+
    '<p>Standort MRT - Hellersdorfer Straße 237, 12627 Berlin</p>'+
    '<br>'+
    '<h5 id="bodyContent"><a target="_blank" href="http://maps.google.de/?daddr=Hellersdorfer Straße 237, 12627 Berlin">Route hierher</a></h5>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
        position: mrtLatlng,
        map: map_mrt,
        desc: 'Hellersdorfer Straße 237, 12627 Berlin',
        tel: '',
        email: '',
        web: '',
        title: 'Dr. med. Sabine Dickert'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map_mrt, marker);
    });
}

