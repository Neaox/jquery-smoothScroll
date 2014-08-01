jquery-smoothScroll
===================

Another tiny jQuery plugin that animates anchor links with some options. Works also for "back to top" links.

**Simple example**
```javascript
$(document).ready(function() {
	$('.scroll').smoothScroll();
});
```

**Scroll to top**
```javascript
$(document).ready(function() {
	$('.toTop').smoothScroll({
		toTop: true
	});
});
```