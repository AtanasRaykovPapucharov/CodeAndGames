'use strict';
// EVENTS $ Handlers

$('main').on('click', () => {
  $('.navbar-collapse').collapse('hide');
});

function closeTaggle() {
  $('.navbar-collapse').collapse('hide');
};

function appendElement(selector, element, href, src) {
  $('<' + element + '/>', {
    href: href,
    text: 'LINKgoogle'
  }).appendTo(selector);
}

appendElement('#home', 'a', 'www.google.com');








