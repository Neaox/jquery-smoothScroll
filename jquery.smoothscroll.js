/*!
 * smoothScroll - jQuery Plugin
 * version: 1.0 (Fri, 1 Aug 2014)
 *
 * License: GNU GPL v2
 * Copyright 2013 Nico Niebergall - nico@nightowl.me
 *
 */

(function ($) {
	jQuery.fn.smoothScroll = function(options) {
		var settings = jQuery.extend({
			duration: 750,
			easing: 'linear',
			offset: 0,
			before: function() {},
			after: function() {},
			toTop: null
		}, options);

		return this.each(function() {
			$(this).click(function(e) {
				var target;
				e.preventDefault();
				
				target = (settings.toTop) ? target = 'html' : target = this.hash;
				
				// callback: before animation
				if(settings.before) {
					settings.before();
				}
				
				$('html').animate({
					scrollTop: $(target).offset().top + parseInt(settings.offset)
				}, settings.duration, settings.easing, settings.after());
			});
		});
	};
}(jQuery));