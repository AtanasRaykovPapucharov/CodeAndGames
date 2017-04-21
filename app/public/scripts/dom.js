'use strict';

// EVENTS $ Handlers

$('main').on('click', () => {
	$('.navbar-collapse').collapse('hide');
});

function closeTaggle() {
	$('.navbar-collapse').collapse('hide');
};


$(function () {
	$(".draggable").draggable();
});
