$(document).ready(function(){$(".tab").click(function(){if(!$(this).hasClass("active")){$(".tab.active").removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-slide-to");"leistung"==this.id?window.history&&window.history.pushState&&history.pushState({target:"0",source:"toggler"},null,null):void 0!==a&&window.history&&window.history.pushState&&history.pushState({target:a,source:"tab"},null,null)}}),$(".tab-small").click(function(){$(this).hasClass("active")||($(".tab-small.active").removeClass("active"),$(this).addClass("active"))}),$(".loc-link").click(function(){var a=$(this).attr("data-slide-to");window.history&&window.history.pushState&&history.pushState({target:a,source:"tab",extras:"loc-link"},null,null)}),$("#location").click(function(a){a.stopPropagation(),$("#location").hide(),$("#location-detail").css("display","block")}),$("#location-detail").click(function(){$("#location-detail").hide(),$("#location").fadeIn()}),$(function(){$(document).click(function(){$("#location-detail").hide(),$("#location").fadeIn()})}),$(window).resize(function(){$("#reichenberger").css("font-size","12px")}),$("#leistung").click(function(){setTimeout(function(){$("html, body").animate({scrollTop:$("#content-slider").offset().top},500)},500)}),$("body,html").bind("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchstart",function(a){(a.which>0||"mousedown"==a.type||"mousewheel"==a.type||"touchstart"==a.type)&&$("html,body").stop()}),$(".toggler").click(function(){var b=$(this).attr("data-show");$("#"+b).hasClass("shown")||(a(b),void 0!==b&&window.history&&window.history.pushState&&history.pushState({target:b,source:"toggler"},null,null))});var a=function(a){$(".togglable").hide(),$(".togglable").removeClass("shown"),$("#"+a).removeClass("hidden").animate({opacity:"show"}),$("#"+a).addClass("shown"),$("html, body").animate({scrollTop:$("#content-slider").offset().top},0)},b=function(){$("#content-slider").carousel(1),$(".tab").each(function(){$(this).removeClass("active")}),$("#leistung").addClass("active")};window.history&&window.history.pushState&&(history.pushState({target:"0",source:"init"},null,null),window.addEventListener("popstate",function(c){null!=c.state?(null==c.state.target||"tab"!=c.state.source&&"init"!=c.state.source||($("#content-slider").carousel(parseInt(c.state.target)),$("#loc-link").removeClass("active"),$(".tab").each(function(){$(this).removeClass("active")}),"loc-link"==c.state.extras&&$("#loc-link").addClass("active"),$('.tab[data-slide-to="'+c.state.target+'"]').each(function(){$(this).addClass("active")})),null!=c.state.target&&"toggler"==c.state.source&&(b(),a(c.state.target),$(".toggler").each(function(){$(this).removeClass("active")}),$('.tab-small[data-show="'+c.state.target+'"]').each(function(){$(this).addClass("active")}))):window.history.back()}))});