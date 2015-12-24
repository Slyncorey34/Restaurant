$(document).ready(function(){
	$("#name").fadeIn(3000);
	$("#img_home").fadeIn(3500);
	$("#navbar").slideDown();

	$("#image_about").fadeIn(3000);
	$("#text_box").slideDown(2000);

	$('#img_home').hover(function(){
		$(this).attr('src', 'images/Zucchini.jpg', 3000);
	});

	$("#img_home").mouseover(function(){
		$(this).attr('src', 'images/portabella.png').fadeIn(2000);
	});


	$('body').on('click', function(){
		$('#container_outer').show();
		$('body').on('click', function(){
			$('#container_outer').hide();
		});
	});
	$("#submit").on('click', function (){
		alert("Thank you. We'll get back to you soon!" );
		event.preventDefault();
	});
	

});
