$(document).ready(function() {

/**
 * Set tab active when clicked
 */
$(".tab").click(function(){
  // If this isn't already active
    if (!$(this).hasClass("active")) {
        // Remove the class from anything that is active
        $(".tab.active").removeClass("active");
        // And make this active
        $(this).addClass("active");
        // add to history
        var target = $(this).attr('data-slide-to');
        if (this.id == 'leistung') {
            history.pushState({target: '0', source: 'toggler'}, null, null);
        } else if (target !== undefined) {
            history.pushState({target: target, source: 'tab'}, null, null);
        }
    }
});

$(".tab-small").click(function(){
    // If this isn't already active
    if (!$(this).hasClass("active")) {
        // Remove the class from anything that is active
        $(".tab-small.active").removeClass("active");
        // And make this active
        $(this).addClass("active");
    }
});

$(".loc-link").click(function(){
    var target = $(this).attr('data-slide-to');
    history.pushState({target: target, source: 'tab', extras: 'loc-link'}, null, null);
});

/**
 * Location Slider
 */
$('#location').click(function(e){ 
    e.stopPropagation();  
  $('#location').hide();
  $('#location-detail').css("display", "block");
});

$('#location-detail').click(function(){ 
  $('#location-detail').hide();
  $('#location').fadeIn();  
});

$(function(){
  $(document).click(function(){  
      $('#location-detail').hide(); 
      $('#location').fadeIn();      
  });
});

$(window).resize(function() {
    $('#reichenberger').css('font-size', '12px');
});

/**
 * Autoscroll on Tab click
 */
$( "#leistung" ).click(function() {
    setTimeout(function() {
        $('html, body').animate({scrollTop: $("#content-slider").offset().top}, 500);
    }, 500);
});
// stop scrolling on user interaction
$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchstart', function(e){
    if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == 'touchstart'){
        $("html,body").stop();
    };
});

/**
 * div toggler
 */
$('.toggler').click(function() {
    var target = $(this).attr('data-show');
    if (!$('#'+target).hasClass('shown')) {
        toggle(target);
        // add to history
        if (target !== undefined) {
            history.pushState({target: target, source: 'toggler'}, null, null);
        }
    }
});
    
var toggle = function(target) {
    $('.togglable').hide()
    $('.togglable').removeClass('shown');
    $('#'+target).removeClass('hidden').animate({opacity:"show"});
    $('#'+target).addClass('shown');
    $('html, body').animate({scrollTop: $("#content-slider").offset().top}, 0);
}

var toggleLeistung = function() {
    $('#content-slider').carousel(1);
    $('.tab').each(function(){ $(this).removeClass('active') });
    $('#leistung').addClass('active');
}

/**
 * History controller
 */
history.pushState({target: '0', source: 'init'}, null, null); // the initial state when page is loaded
window.addEventListener("popstate", function(ev) {
    if(ev.state != null) {
        // big tabs
        if (ev.state.target != null && (ev.state.source == 'tab' || ev.state.source == 'init')) {
            $('#content-slider').carousel(parseInt(ev.state.target));
            $('#loc-link').removeClass('active');
            $('.tab').each(function() {
                $(this).removeClass('active');
            });
            if (ev.state.extras == 'loc-link') {
                $('#loc-link').addClass('active');
            } 
            $('.tab[data-slide-to="' + ev.state.target + '"]').each(function() {
                $(this).addClass('active');
            });
        }
        // small tabs
        if (ev.state.target != null && ev.state.source == 'toggler') {
            toggleLeistung();
            toggle(ev.state.target);
            $('.toggler').each(function() {
                $(this).removeClass('active');
            });
            $('.tab-small[data-show="' + ev.state.target + '"]').each(function() {
                $(this).addClass('active');
            });
        }
    } else {
        window.history.back(); // don't override the browser's behavior
    }
});

}); // document ready