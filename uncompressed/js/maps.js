google.maps.event.addDomListener(window, 'load', init);

$('#reichenberger').click(function() {
    setTimeout(function(){
        google.maps.event.trigger(map, 'resize');
        map.setCenter(myLatlng);
    }, 250)
});

function init() {
    
    myLatlng = new google.maps.LatLng(52.540998,13.487011);

    var mapOptions = {
        center: myLatlng,
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
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},       {"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
        
    }
    
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading hidden-xs">Dr. med. Sabine Dickert</h1>'+
    '<div id="bodyContent">'+
    '<p>Radiologie im Ärztehaus Rudolf Virchow - Reichenberger Straße 3, 13055 Berlin</p>'+
    '<br>'+
    '<h5><a target="_blank" href="http://maps.google.de/?daddr=Reichenberger Straße 3, 13055 Berlin">Route hierher</a></h5>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var mapElement = document.getElementById('map');
    map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        desc: 'Reichenberger Straße 3, 13055 Berlin',
        tel: '',
        email: '',
        web: '',
        title: 'Dr. med. Sabine Dickert'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}