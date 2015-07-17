(function ($) {
  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {
      $('#block-superfish-1 .block-content').before('<button id="mobile-menu"> ≡ Menu </button>');
      $('#block-superfish-1 #mobile-menu', context).click(function(){
        $('#block-superfish-1 #superfish-1').slideToggle("ease-in-out");
      });
    }
  };

  Drupal.behaviors.secureSite = {
    attach: function (context, settings) {
      var dontShow = localStorage.getItem("dontShow"); // define variable

      $('.close').click(function() {	// if button is clicked
        $('#block-block-2').hide();		// hide message
        dontShow = true;				// set our variable to true
        localStorage.setItem("dontShow", dontShow);	// and save to the client machine
        console.log(dontShow);
      });

      function checkShow() {
      	dontShow = localStorage.getItem("dontShow");	// read variable stored in local client, if there is already
      	console.log(dontShow);
      	if (dontShow = false) {
      		$('#block-block-2').show();					// if value is false, we show the message.
      	}
      }

		dontShow = false;
		localStorage.setItem("dontShow", dontShow);
      $(document).ready(checkShow);
      console.log(dontShow);
    }
  };
}(jQuery));
