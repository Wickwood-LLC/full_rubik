(function ($) {
  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {
      $('#block-superfish-1 .block-content').before('<button id="mobile-menu"> ≡ Menu </button>');
      $('#block-superfish-1 #mobile-menu', context).click(function(){
        $('#block-superfish-1 #superfish-1').slideToggle("ease-in-out");
      });
    }
  };

  // Drupal.behaviors.secureSite = {
  //   attach: function (context, settings) {
  //   var dontShow = localStorage.getItem("dontShow");
	 //  $('.close').click(function() {
  //       $('#block-block-2').hide();
  //       dontShow = true;
  //       localStorage.setItem("dontShow", dontShow);
  //       console.log(dontShow);
  //     });
  //     function checkShow() {
  //     	dontShow = localStorage.getItem("dontShow");
  //     	console.log(dontShow);
  //     	if (dontShow = false) {
  //     		$('#block-block-2').show();
  //     	} else {
  //     		$('#block-block-2').hide();
  //     	}
  //     }
		// dontShow = false;
		// localStorage.setItem("dontShow", dontShow);
  //     $(document).ready(checkShow);
  //     console.log(dontShow);
  //   }
  // };
}(jQuery));
