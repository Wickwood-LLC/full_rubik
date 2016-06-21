(function ($) {
  Drupal.behaviors.collapseBlock = {
    attach: function (context, settings) {
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').off("click");				// This is to prevent the yoyo effect wherein the block opens and closes immediately
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').on("click", function() {
    		var $this = $(this);
    		$this.parents('.panelizer-view-mode.node-embedded-to-profile').find('.panel-display').first().slideToggle();
    		$this.toggleClass('open');
		  });
    }
  };

  Drupal.behaviors.touchMenu = {
    attach: function (context, settings) {
      $('.nav > li.mega').click(function(event) {     
      if (!$(this).hasClass('open-fix')) {
       //MENU IS CLOSED
           $("ul.tb-megamenu-nav li").removeClass("open-fix");
           $("ul.tb-megamenu-nav li").removeClass("open");
           $(this).addClass('open-fix');
           $(this).addClass('open');
      } else {
      //MENU IS OPEN
          $(this).removeClass('open-fix');
          $(this).removeClass('open');
      }

      });
    }
  };
}(jQuery));