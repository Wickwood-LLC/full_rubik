!function($){Drupal.behaviors.collapseBlock={attach:function(o,e){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var o=$(this);o.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),o.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(o,e){if($(".pane-profile2-form-buttons").offset()){$(".pane-profile2-form-buttons").css("position","static");var i=$(".pane-profile2-form-buttons").offset().top;if("body#overlay")var t=$("div.overlay").height();else var t=$(window).height();console.log("Window height is"+t),$(window).scroll(function(){var o=$(window).scrollTop(),e=o+t;i>e?$(".pane-profile2-form-buttons").css({position:"fixed",bottom:0,left:0,right:0}):$(".pane-profile2-form-buttons").css("position","static")})}}}}(jQuery);