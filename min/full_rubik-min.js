!function($){Drupal.behaviors.responsiveMenu={attach:function(e,o){$("#block-superfish-1 .block-content").before('<button id="mobile-menu"> ≡ Menu </button>'),$("#block-superfish-1 #mobile-menu",e).click(function(){$("#block-superfish-1 #superfish-1").slideToggle("ease-in-out")})}},Drupal.behaviors.secureSite={attach:function(e,o){function t(){c=localStorage.getItem("dontShow"),(c=!0)&&$("#block-block-2").hide()}var c=localStorage.getItem("dontShow");$(".close").click(function(){$("#block-block-2").hide(),c=!0,localStorage.setItem("dontShow",c)}),$(document).ready(t)}}}(jQuery);