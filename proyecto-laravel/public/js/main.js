var url ='http://proyecto-laravel.com.devel';

window.addEventListener("load",function() {
	$('.btn-like').css('cursor','pointer');
	$('.btn-dislike').css('cursor','pointer');

	function like(){
		$('.btn-like').unbind('click').click(function() {
			console.log('like');
			$(this).addClass('btn-dislike').removeClass('btn-like');
			$(this).attr('src', url+'/img/heart-red.png');
			
			$.ajax({
				url: url+'/like/'+$(this).data('id'),
				type: 'GET',
				success: function(response) {
					if (response.like) {
						console.log('Has dado like');

					}else {
						console.log('Error al dar like');

					}
				}
			});

			dislike();
		});
		
	}
	like();

	function dislike(){
		$('.btn-dislike').unbind('click').click(function() {
			console.log('dislike');
			$(this).addClass('btn-like').removeClass('btn-dislike');
			$(this).attr('src',url+'/img/heart-black.png');
			$.ajax({
				url: url+'/dislike/'+$(this).data('id'),
				type: 'GET',
				success: function(response) {
					if (response.dislike) {
						console.log('Has dado dislike');

					}else {
						console.log('Error al dar dislike');
						
					}
				}
			});
			like();
		});
		
	}
	dislike();



	$('#buscador').submit(function(e){
		$(this).attr('action',url+'/comunidad/'+$('#buscador #search').val());
		});


});