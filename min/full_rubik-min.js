!function($){Drupal.behaviors.collapseBlock={attach:function(o,i){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var o=$(this);o.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),o.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(o,i){$(window).on("load resize",function(){var o=$('div[id*="edit-actions"]'),i=o.offset().top,t=$(window).height(),e=o.parent().width(),n=o.parent().height(),s=$(window).scrollTop(),l=s+t;console.log(i),console.log(l-n),console.log(i-(l-n)),o.css("position","static"),o.width(e),i>l-n?o.css({position:"fixed",top:"initial",bottom:0,width:$(this).parent().width()}):0>i-s?o.css({position:"fixed",top:"65px",bottom:"initial",width:$(this).parent().width()}):o.css("position","static"),$(window).scroll(function(){var s=$(window).scrollTop(),l=s+t;console.log(i),console.log(l-n),console.log(i-(l-n)),i>l-n?o.css({position:"fixed",top:"initial",bottom:0,width:e}):0>i-s?o.css({position:"fixed",top:"65px",bottom:"initial",width:e}):o.css("position","static")})})}}}(jQuery);