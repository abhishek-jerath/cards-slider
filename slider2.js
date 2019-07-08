$(function() {
 
	$('#idcarousel').carouFredSel({
		width: 800,
		items: 3,
		scroll: 1,
		auto: {
			duration: 1250,
			timeoutDuration: 2500
		},
		// prev: '#idprev',
		// next: '#idnext',
		pagination: '#idpager'
	});
	
});