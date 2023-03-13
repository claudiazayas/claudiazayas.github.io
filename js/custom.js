!function(n){"use strict";n(window).on("load",(function(){var o=n(".preloader");pageTransition({target:document.querySelector(".page"),delay:0,duration:500,classActive:"animated",conditions:function(n,o){},onTransitionStart:function(n){setTimeout((function(){o.removeClass("loaded")}),.75*n.duration)},onReady:function(){o.addClass("loaded")}}),n("#selector").length&&n("#selector").animatedHeadline({animationType:"clip"})})),jQuery(document).ready((function(n){if(n(".cd-stretchy-nav").length>0){var o=n(".cd-stretchy-nav");o.each((function(){var o=n(this);o.find(".cd-nav-trigger").on("click",(function(n){n.preventDefault(),o.toggleClass("nav-is-visible")}))})),n(document).on("click",(function(e){!n(e.target).is(".cd-nav-trigger")&&!n(e.target).is(".cd-nav-trigger span")&&o.removeClass("nav-is-visible")}))}function e(){n(window).width()<1025&&n("#nav > li").on("click",(function(o){o.preventDefault(),n("#main").addClass("open")}))}var i;function t(){var o=document.getElementById("video");!0!==o.paused&&!0!==o.ended&&o.pause(),n(".youtube-video")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}n("body.light.dark-header .cd-stretchy-nav ul li a").on("click",(function(){n(this).hasClass("home")?n(".cd-stretchy-nav").addClass("lighter"):n(".cd-stretchy-nav").removeClass("lighter")})),n("body.light.dark-header .link-portfolio-one, body.light.dark-header .link-portfolio-two").on("click",(function(){n(".cd-stretchy-nav").removeClass("lighter")})),n("body.light #portfolio-items li a").on("click",(function(){n(".cd-stretchy-nav").addClass("lighter-in-portfolio")})),n(".link-portfolio-one").on("click",(function(o){var e=n(this).index()+3;n("#main > section.active").removeClass("active"),n("#main > section:nth-child("+e+")").addClass("active"),n(".stretchy-nav li:first-child").removeClass("active"),n(".stretchy-nav li:nth-child(2)").addClass("active"),o.preventDefault()})),n(".link-portfolio-two").on("click",(function(o){var e=n(this).index()+3;n("#main > section.active").removeClass("active"),n("#main > section:nth-child("+e+")").addClass("active"),n(".stretchy-nav li:nth-child(1)").removeClass("active"),n(".stretchy-nav li:nth-child(3)").addClass("active"),o.preventDefault()})),n(".contactform").on("submit",(function(){n(".output_message").text("Loading...");var o=n(this);return n.ajax({url:o.attr("action"),method:o.attr("method"),data:o.serialize(),success:function(o){"success"==o?(n(".form-inputs").css("display","none"),n(".box p").css("display","none"),n(".contactform").find(".output_message").addClass("success"),n(".output_message").text("Message Sent!")):(n(".tabs-container").css("height","440px"),n(".contactform").find(".output_message").addClass("error"),n(".output_message").text("Error Sending!"))}}),!1})),e(),n(window).on("resize",(function(n){clearTimeout(i),i=setTimeout((function(){e()}),250)})),n(".navigation > li, .stretchy-nav > li").on("click",(function(o){if(!n(this).hasClass("active")){var e=n(this).index()+2;n(".navigation > li.active, .stretchy-nav > li.active").removeClass("active"),n(this).addClass("active"),n("#main > section.active").removeClass("active"),n("#main > section:nth-child("+e+")").addClass("active"),t(),n(".cd-stretchy-nav").removeClass("lighter-in-portfolio")}o.preventDefault(),n(".project-info-container").hasClass("slide-in")&&n(window).width()>1024&&setTimeout((function(){n(".project-info-container").removeClass("slide-in"),n(".close-project").removeClass("is-visible"),a?n(".portfolio-container").removeClass("slide-out").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",(function(){n(".portfolio-container").removeClass("overflow-hidden")})):(n(".portfolio-container").removeClass("slide-out"),n(".portfolio-container").removeClass("overflow-hidden"))}),600)})),window.location.hash&&n("#link-"+window.location.hash.replace(/^#/,"")).length&&n("#link-"+window.location.hash.replace(/^#/,"")).trigger("click"),window.userInteractionTimeout=null,window.userInteractionInHTMLArea=!1,window.onBrowserHistoryButtonClicked=null,n(document).ready((function(){n(document).mousedown((function(){clearTimeout(window.userInteractionTimeout),window.userInteractionInHTMLArea=!0,window.userInteractionTimeout=setTimeout((function(){window.userInteractionInHTMLArea=!1}),500)})),n(document).keydown((function(){clearTimeout(window.userInteractionTimeout),window.userInteractionInHTMLArea=!0,window.userInteractionTimeout=setTimeout((function(){window.userInteractionInHTMLArea=!1}),500)})),window.history&&window.history.pushState&&n(window).on("popstate",(function(){window.userInteractionInHTMLArea||(window.location.hash&&n("#link-"+window.location.hash.replace(/^#/,"")).length&&n("#link-"+window.location.hash.replace(/^#/,"")).trigger("click"),window.location.hash||n("#link-work").trigger("click")),window.onBrowserHistoryButtonClicked&&window.onBrowserHistoryButtonClicked()}))})),n("#back-mobile").on("click",(function(o){n("#main").removeClass("open"),t()}));var a=navigator.userAgent.indexOf("Firefox")>-1;n(".portfolio-section").find("ul a").on("click",(function(o){o.preventDefault();var e=n(this).data("type");n(".project-info-container."+e).addClass("slide-in"),n(".close-project").addClass("is-visible"),a?n(".portfolio-container").addClass("slide-out").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",(function(){n(".portfolio-container").addClass("overflow-hidden")})):(n(".portfolio-container").addClass("slide-out"),n(".portfolio-container").addClass("overflow-hidden")),n(window).width()<1025&&n("#back-mobile").css("pointer-events","none")})),n(document).on("click",".close-project, .portfolio-overlay",(function(o){o.preventDefault(),n(".project-info-container").removeClass("slide-in"),n(".close-project").removeClass("is-visible"),t(),n(".cd-stretchy-nav").removeClass("lighter-in-portfolio"),a?n(".portfolio-container").removeClass("slide-out").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",(function(){n(".portfolio-container").removeClass("overflow-hidden")})):(n(".portfolio-container").removeClass("slide-out"),n(".portfolio-container").removeClass("overflow-hidden")),n(window).width()<1025&&n("#back-mobile").css("pointer-events","auto")})),n(".portfolio-slider").carousel({pause:!0,interval:!1})}))}(jQuery);