(function($) {

	/*
	 * LIGHTBOX
	 */
	
	// vytvorime overlay
	var gallery = $('.gallery'), // najdeme galeriu
		overlay = $('<div/>', { id: 'overlay' }); // vyrobime prazdny div id="overlay"
	
	// prilepime ho na spodok stranky, skryjeme
	overlay.appendTo('body').hide();


	// na galeriu pripneme plosticu, event listener
	// ktory bude nacuvat, ci sme neklikli na na a element spadajuci do gallery
	// listener nepripneme na jednotlive obrazky, pretoze budeme dalsie obrazky nacitavat cez ajax 
	// a teda potrebujeme aby lightbox fungoval na vsetky a spadajuce do gallery, aj novo vzniknute
	gallery.on('click', 'a', function(event)
	{
		var href  = $(this).attr('href'), // ziskame adresu velkeho obrazka
			image = $('<img>', { src: href, alt: 'learn2code' }); // vytvorime img z velkej adresy

		// pripneme obrazok na overlay a nechame zobrabit
		overlay.html( image ) 
			   .show();

		event.preventDefault();
	});


	// skryjeme overlay
	overlay.on('click', function() {
		overlay.hide();
	});


	// aby sa dal zavriet escapom
	$(document).on('keyup', function(event) {
		if ( event.which === 27 ) overlay.hide();
	});

})(jQuery);