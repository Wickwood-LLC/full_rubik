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

  Drupal.behaviors.stickyMenu = {
    attach: function (context, settings) {
      var stickyTop;
      var menuWidth;
      var menuHeight;
      var windowTop;
      var currentPosition;
      var $menu;

      var topSpacing;

      $menu = $('#block-superfish-1');
      topSpacing = $('#admin-menu').height();

      $(window).on("load resize", function() {
        menuWidth = $menu.parent().width();          // gets the width of the container
        $menu.css({
          width: menuWidth,
        });
        $menu.removeClass('sticky-menu');

        $('#block-panels-mini-header').css({
          "margin-bottom": 0
        });

        stickyTop = $menu.offset().top;       // tells how far our target element is from the top of the page
        windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
        currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently
        menuHeight = $menu.height();        // gets the height of our menu
        topSpacing = $('#admin-menu').height();

        // console.log('Distance from top of page: ' + stickyTop);
        // console.log('Position on load ' + currentPosition);

        if (currentPosition < 0) {   // if target element goes above the screen
          $menu.css({
            width: '100%',
            left: '0',
          });   //stick it at the top
          $menu.addClass('sticky-menu');
          
          if (!($("#block-superfish-1 #logo").length) && $(window).width() >= 720) {
            $("#logo").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 #logo").delay(500).queue(function() {
              $("#block-superfish-1 #logo").addClass('animate').dequeue();
            });
          }
          else if ($(window).width() < 720) {
            $("#block-superfish-1 #logo").remove();
          }

          if (!($("#block-superfish-1 .pane-page-site-name").length) && $(window).width() >= 870) {
            $(".pane-page-site-name").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 .pane-page-site-name").delay(500).queue(function() {
              $("#block-superfish-1 .pane-page-site-name").addClass('animate').dequeue();
            });
          }
          else if ($(window).width() < 870) {
            $("#block-superfish-1 .pane-page-site-name").remove();
          }

          $('#block-panels-mini-header').css({
            "margin-bottom": menuHeight + 18
          });
        }
        else {
          $menu.css({
            width: menuWidth,
          });
          $menu.removeClass('sticky-menu');

          $("#block-superfish-1 #logo").remove();
          $("#block-superfish-1 .pane-page-site-name").remove();

          $('#block-panels-mini-header').css({
            "margin-bottom": 0
          });
        }

        if ($('#admin-menu').length) {
          windowTop = $(window).scrollTop() + topSpacing;    // tells how far our screen is currently from the top of the page
          currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently

          if (currentPosition < 0) {   // if target element goes above the screen
            $menu.css({
              top: topSpacing,
            });
          }
          else {
            $menu.css({
              top: '0',
            });
          }
        }

        // console.log("Top spacing is " + topSpacing);
      });
      
      $('#admin-menu').on("mresize", function(){
        menuWidth = $menu.parent().width();          // gets the width of the container
        $menu.css({
          width: menuWidth,
        });
        $menu.removeClass('sticky-menu');

        $('#block-panels-mini-header').css({
          "margin-bottom": 0
        });

        stickyTop = $menu.offset().top;       // tells how far our target element is from the top of the page
        windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
        currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently
        menuHeight = $menu.height();        // gets the height of our menu
        topSpacing = $('#admin-menu').height();

        // console.log('Distance from top of page: ' + stickyTop);
        // console.log('Position on load ' + currentPosition);

        if (currentPosition < 0) {   // if target element goes above the screen
          $menu.css({
            width: '100%',
            left: '0',
          });   //stick it at the top
          $menu.addClass('sticky-menu');
          
          if (!($("#block-superfish-1 #logo").length) && $(window).width() >= 720) {
            $("#logo").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 #logo").delay(500).queue(function() {
              $("#block-superfish-1 #logo").addClass('animate').dequeue();
            });
          }
          else if ($(window).width() < 720) {
            $("#block-superfish-1 #logo").remove();
          }

          if (!($("#block-superfish-1 .pane-page-site-name").length) && $(window).width() >= 870) {
            $(".pane-page-site-name").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 .pane-page-site-name").delay(500).queue(function() {
              $("#block-superfish-1 .pane-page-site-name").addClass('animate').dequeue();
            });
          }
          else if ($(window).width() < 870) {
            $("#block-superfish-1 .pane-page-site-name").remove();
          }

          $('#block-panels-mini-header').css({
            "margin-bottom": menuHeight + 18
          });
        }
        else {
          $menu.css({
            width: menuWidth,
          });
          $menu.removeClass('sticky-menu');

          $("#block-superfish-1 #logo").remove();
          $("#block-superfish-1 .pane-page-site-name").remove();

          $('#block-panels-mini-header').css({
            "margin-bottom": 0
          });
        }

        if ($('#admin-menu').length) {
          windowTop = $(window).scrollTop() + topSpacing;    // tells how far our screen is currently from the top of the page
          currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently

          if (currentPosition < 0) {   // if target element goes above the screen
            $menu.css({
              top: topSpacing,
            });
          }
          else {
            $menu.css({
              top: '0',
            });
          }
        }

        // console.log("Top spacing is " + topSpacing);
      });

      $(window).scroll(function(){ // scroll event 
        windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
        currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently

        // console.log('Distance from top of page: ' + stickyTop);
        // console.log('Current position: ' + currentPosition);

        if ($('#admin-menu').length) {
          windowTop = $(window).scrollTop() + topSpacing;    // tells how far our screen is currently from the top of the page
          currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently
          // console.log('[admin] Distance from top of page: ' + stickyTop);
          // console.log('[admin] Current position: ' + currentPosition);

          if (currentPosition < 0) {   // if target element goes above the screen
            $menu.css({
              top: topSpacing,
              width: '100%',
              left: '0',
            });   //stick it at the top
            $menu.addClass('sticky-menu');

            $('#block-panels-mini-header').css({
              "margin-bottom": menuHeight + 18
            });
          }
          else {
            $menu.css({
              top: '0',
              width: menuWidth,
            });
            $menu.removeClass('sticky-menu');

            $('#block-panels-mini-header').css({
              "margin-bottom": 0
            });
          }
        }

        if (currentPosition < 0) {   // if target element goes above the screen
          $menu.css({
            width: '100%',
            left: '0',
          });   //stick it at the top
          $menu.addClass('sticky-menu');

          if (!($("#block-superfish-1 #logo").length) && $(window).width() > 720) {
            $("#logo").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 #logo").delay(500).queue(function() {
              $("#block-superfish-1 #logo").addClass('animate').dequeue();
            });
          }
          if (!($("#block-superfish-1 .pane-page-site-name").length) && $(window).width() > 870) {
            $(".pane-page-site-name").clone().prependTo('#block-superfish-1');
            $("#block-superfish-1 .pane-page-site-name").delay(500).queue(function() {
              $("#block-superfish-1 .pane-page-site-name").addClass('animate').dequeue();
            });
          }

          $('#block-panels-mini-header').css({
            "margin-bottom": menuHeight + 18
          });
        }
        else {
          $menu.css({
            width: menuWidth,
          });
          $menu.removeClass('sticky-menu');

          $("#block-superfish-1 #logo").remove();
          $("#block-superfish-1 .pane-page-site-name").remove();

          $('#block-panels-mini-header').css({
            "margin-bottom": 0
          });
        }

        // console.log("Top spacing is " + topSpacing);
      });
    }
  };
  
}(jQuery));