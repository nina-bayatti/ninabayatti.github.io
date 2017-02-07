console.log('app.js is running!');

//Run all JS after page loads
$(document).ready (function () {

	//Animate h1 and h2 on homepage
	$('.lead').toggleClass('animated bounceInDown');

	//Contact form submission response
	$('.contactForm').click(function (e) {
		console.log('A contact was requested.')
		e.preventDefault();
		alert('Unfortunately, our web developer has not learned back-end development yet. Please contact us by sending an email to nbayatti@gmail.com');
	});

	//Wiggle buttons on hover
	$('.btn').hover(function () {
		$(this).toggleClass('animated jello');
	});

	//Parallax effects
	$('.parallax-window1').parallax({imageSrc: '../NinaFinalProject/assets/images/stretch-view.jpg'});
	$('.parallax-window2').parallax({imageSrc: '../NinaFinalProject/assets/images/alia-yogi.JPG'});

	$('#burger').click(function () {
		$('#mobile-nav').show();
	});

	//Gym bag animations
	$('.gymBags').hover(function () {
		$(this).toggleClass('animated flipInY');
	});


});
