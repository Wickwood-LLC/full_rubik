!function($){Drupal.behaviors.collapseBlock={attach:function(e,s){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var e=$(this);e.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),e.toggleClass("open")})}},Drupal.behaviors.stickyMenu={attach:function(e,s){var o,i,n,a,l,t,p;t=$("#block-superfish-1"),p=$("#admin-menu").height(),$(window).off("load resize scroll"),$(window).on("load resize",function(){i=t.parent().width(),t.css({width:i}),$("sticky-menu")&&t.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),o=t.offset().top,a=$(window).scrollTop(),l=o-a,n=t.height(),p=$("#admin-menu").height(),l<0?(t.css({width:"100%",left:"0"}),t.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>=720?($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(500).queue(function(){$("#block-superfish-1 #logo").addClass("animate").dequeue()})):$(window).width()<720&&$("#block-superfish-1 #logo").remove(),!$("#block-superfish-1 .pane-page-site-name").length&&$(window).width()>=870?($(".pane-page-site-name").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 .pane-page-site-name").delay(500).queue(function(){$("#block-superfish-1 .pane-page-site-name").addClass("animate").dequeue()})):$(window).width()<870&&$("#block-superfish-1 .pane-page-site-name").remove(),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(t.css({width:i}),t.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-superfish-1 .pane-page-site-name").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(a=$(window).scrollTop()+p,l=o-a,l<0?t.css({top:p}):t.css({top:"0"}))}),$("#admin-menu").on("mresize",function(){i=t.parent().width(),t.css({width:i}),t.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),o=t.offset().top,a=$(window).scrollTop(),l=o-a,n=t.height(),p=$("#admin-menu").height(),l<0?(t.css({width:"100%",left:"0"}),t.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>=720?($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(500).queue(function(){$("#block-superfish-1 #logo").addClass("animate").dequeue()})):$(window).width()<720&&$("#block-superfish-1 #logo").remove(),!$("#block-superfish-1 .pane-page-site-name").length&&$(window).width()>=870?($(".pane-page-site-name").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 .pane-page-site-name").delay(500).queue(function(){$("#block-superfish-1 .pane-page-site-name").addClass("animate").dequeue()})):$(window).width()<870&&$("#block-superfish-1 .pane-page-site-name").remove(),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(t.css({width:i}),t.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-superfish-1 .pane-page-site-name").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(a=$(window).scrollTop()+p,l=o-a,l<0?t.css({top:p}):t.css({top:"0"}))}),$(window).scroll(function(){t.addClass("sticky-menu"),a=$(window).scrollTop(),l=o-a,$("#admin-menu").length&&(a=$(window).scrollTop()+p,l=o-a,l<0?(t.css({top:p,width:"100%",left:"0"}),t.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(t.css({top:"0",width:i}),t.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}))),l<0?(t.css({width:"100%",left:"0"}),t.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>720&&($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(500).queue(function(){$("#block-superfish-1 #logo").addClass("animate").dequeue()})),!$("#block-superfish-1 .pane-page-site-name").length&&$(window).width()>870&&($(".pane-page-site-name").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 .pane-page-site-name").delay(500).queue(function(){$("#block-superfish-1 .pane-page-site-name").addClass("animate").dequeue()})),$("#block-panels-mini-header").css({"margin-bottom":n+18})):l>=0&&(t.css({width:i}),t.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-superfish-1 .pane-page-site-name").remove(),$("#block-panels-mini-header").css({"margin-bottom":0}))})}}}(jQuery);