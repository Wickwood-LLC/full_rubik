!function($){Drupal.behaviors.collapseBlock={attach:function(o,e){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var o=$(this);o.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),o.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(o,e){var i=$(".pane-profile2-form-buttons").offset().top,t=$(window).height();console.log("stickyTop is "+i),console.log("windowHeight is "+t),$(window).scroll(function(){var o=$(window).scrollTop();console.log("Bottom is "+o+t),i>o+t?$(".pane-profile2-form-buttons").css({position:"fixed",bottom:0}):$(".pane-profile2-form-buttons").css("position","static")})}}}(jQuery);