$(function(){

    /* Enable tooltips everywhere */
    $('[data-toggle="tooltip"]').tooltip();

    let href = window.location.href;

    /* Highlighting admin navbar */
    $('.navbar-nav > li > a[href="'+href+'"]').parent().addClass('active');
	$('.app-left-sidebar-ul > li > a[href="'+href+'"]').parent().addClass('active');

    /* Change the value of Choose file after the file has been chosen */
    $('.custom-file-input').on('change', function() {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });

    /* To leave open admin menu when it active and for highlighting */

	let linksLength = $('#exampleAccordion > li > ul > li').length;

	for (var i = 0; i <= linksLength ; i++) {
		const accordionLink = $('#exampleAccordion li ul li:eq(' + i + ') a');
		let attrHref = accordionLink.attr('href');

		if ( href.match(new RegExp('^' + attrHref)) ) {
			accordionLink.addClass('active-color');
			accordionLink.parents('ul').addClass('show');
			accordionLink.parents('ul').siblings('a').removeClass('collapsed');
			break;
		}
	}

    /* For button back to top */
    $(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	
	// scroll body to 0px on click
	$('#back-to-top').click(function () {			
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
    });

    /* For confirm plugin */
    $('.confirm-plugin-delete').jConfirmAction({
        question: 'Are you sure?',
        noText: 'Cancel'
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });



});

$(window).on('load', function() {

    /* In order a thumbnail of any size to be displayed normally */
    if ($(document).width() > 767) {

        var thumbnail = $('.app-thubnail-nav-link .app-thubnail-wrapper');

        if (thumbnail) {
            var thumbnailWidth = thumbnail.outerWidth();
            thumbnail.css('left', -thumbnailWidth);
        }
    }

});
