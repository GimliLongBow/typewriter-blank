/**
* Ronnigen Design
* Project: {project name here}
* Copyright: {year}
*
* This file does everything!
*/ 

/** 
* Global variables.
*/

var urlParams = {};

/** 
* Initial document.ready call.
* All default page load actions here.
*/
$(function() {
	$('#id').on('click', clickHandler); // Preferred click listener format as of jQuery 1.7.
});


/***************
 * Click handlers.
 ***************/

/**
* Standard JSDoc format.
* Function definition with brief description.
*/
clickHandler = function(event) {
	event.stopPropagation(); // Use this or return false; to cancel default event.
}


/***************
 * General functions.
 ***************/

/**
 * Loads URL parameters into an array for local usage.
 */
loadUrlParams = function () {
	var e,
		a = /\+/g,  // Regex for replacing addition symbol with a space
		r = /([^&=]+)=?([^&]*)/g,
		d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
		q = window.location.search.substring(1);

	while (e = r.exec(q))
		urlParams[d(e[1])] = d(e[2]);
}