(function ($) {
  Drupal.behaviors.secureSite = {
    attach: function () {
      $('.close').click(function() {	// if button is clicked
        $('#block-block-2').hide();		// hide message
        dontShow = true;				// set our variable to true
        localStorage.setItem("dontShow", dontShow);	// and save to the client machine
        // console.log(dontShow);
      });

      	var dontShow = localStorage.getItem("dontShow"); // define variable, read from local storage if there is
      	// console.log(dontShow);
      	if (dontShow) {
      		$('#block-block-2').hide();					// if value is true, we hide the message.
      		// console.log(dontShow);
      	} else {
      		$('#block-block-2').show();
      		// console.log(dontShow);
      	}

		dontShow = false;
		localStorage.setItem("dontShow", dontShow);
      // $(document).ready(checkShow);
      // console.log(dontShow);
    }
  };
}(jQuery));
