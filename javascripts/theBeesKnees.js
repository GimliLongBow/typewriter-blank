/**
* Ronnigen Design
* Project: {project name here}
* Copyright: {year}
*
* This file does everything!
*/ 

/** 
* Initial document.ready call.
* All default page load actions here.
*/
$(function() {
	$('#id').on('click', clickHandler); // Preferred click listener format as of jQuery 1.7.
});

/**
* Standard JSDoc format.
* Function definition with brief description.
*/
clickHandler = function(event) {
	event.stopPropagation(); // Use this or return false; to cancel default event.
}