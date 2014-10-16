// Hyphenate words
Hyphenator.config({
	minwordlength : 8
});
Hyphenator.run();


// Navbar: On start page, hide logo on top of scroll
var $logo = $('.navbar-brand');
var logoBreakPoint;
var toggleLogo = function() {
	if ($(window).scrollTop() >= logoBreakPoint) {
		// Show logo
		$logo
		.addClass("fadeInLeft")
		.removeClass('fadeOutLeft hidden')
	} else {
		// Hide logo
		if ($logo.hasClass('fadeInLeft')) {
			$logo.addClass("fadeOutLeft")
				.removeClass("fadeInLeft hidden");			
		}

	}  

};
$(document).ready(function () {
	// Only apply this effect on start page
	if ($('body').hasClass('start')) {
		logoBreakPoint = $('.jumbotron h1').offset().top;
		document.onscroll = toggleLogo;
	}
})
