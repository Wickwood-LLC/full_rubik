!function($){Drupal.behaviors.responsiveMenu={attach:function(o,e){$("#block-superfish-1 .block-content").before('<button id="mobile-menu"> ≡ Menu </button>'),$("#block-superfish-1 #mobile-menu",o).click(function(){$("#block-superfish-1 #superfish-1").slideToggle("ease-in-out")})}},Drupal.behaviors.secureSite={attach:function(o,e){function t(){c=localStorage.getItem("dontShow"),console.log(c),(c=!0)&&$("#block-block-2").hide()}var c=localStorage.getItem("dontShow");$(".close").click(function(){$("#block-block-2").hide(),c=!0,localStorage.setItem("dontShow",c),console.log(c)}),$(document).ready(t),console.log(c)}}}(jQuery);