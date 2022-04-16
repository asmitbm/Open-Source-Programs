$(document).ready(function() {
	$('.toggle-values-display').on('click', function() {

		var property-section = $(this).parents('.property-section');

		if ($(this).hasClass('open'))
		{
			$(this).addClass('closed').removeClass('open');

			property-section.addClass('closed');
			
			return false; 

		} 			
			$(this).addClass('open').removeClass('closed');

			property-section.removeClass('closed');
		
	});

});
