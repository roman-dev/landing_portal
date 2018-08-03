/* ADAPTIVE MENU */
$(function() {
	$('.menu-button').on('click', function() {
		$('.main-menu').slideToggle(300, function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
});

/* NAVIGATION*/
$(document).ready(function () {
 $("#item-home").click(function () {
  $('html, body').animate({
   scrollTop: $("#home").offset().top
  }, 1000);
 });
 $("#item-about").click(function () {
  $('html, body').animate({
   scrollTop: $("#about").offset().top
  }, 1000);
 });
 $("#item-wedo").click(function () {
  $('html, body').animate({
   scrollTop: $("#wedo").offset().top
  }, 1000);
 });
 $("#item-proj").click(function () {
  $('html, body').animate({
   scrollTop: $("#proj").offset().top
  }, 1000);
 });
 $("#item-team").click(function () {
  $('html, body').animate({
   scrollTop: $("#team").offset().top
  }, 1000);
 });
 $("#item-contact").click(function () {
   $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
 });
});

/* SCROLL to top*/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
		} else {
		$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},500);
	});
});

/* FIXED HEADER */
$(document).ready(function () {
	$('.header__bottom').removeClass('fixed');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 280) {
		$('.header__bottom').addClass('fixed').fadeIn('fast');
		} else {
		$('.header__bottom').removeClass('fixed').fadeIn('fast');
		};
	});
});