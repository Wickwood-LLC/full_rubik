(function ($) {
  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {
      $('#block-superfish-1 .block-content').before('<button id="mobile-menu"> ≡ Menu </button>');
      $('#block-superfish-1 #mobile-menu', context).click(function(){
        $('#block-superfish-1 #superfish-1').slideToggle("ease-in-out");
      });
    }
  };

  Drupal.behaviors.secureSiteCookies = {
    attach: function (context, settings) {
    	function setCookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		    }
		    return "";
		}

		function checkCookie() {
		    var user = getCookie("username");
		    if (user != "") {
		        alert("Welcome again " + user);
		    } else {
		        user = prompt("Please enter your name:", "");
		        if (user != "" && user != null) {
		            setCookie("username", user, 365);
		        }
		    }
		}
    }
  };
}(jQuery));