			(function() {
				$('body').on('keydown', function(e) {
					var val = $('input').val();
					
					if (e.keyCode == 13) {
						if(val != "") {
							$('.unCheckedlst ul').append($('<li />', {
								text: val
							}).append($('<input />', {
								type: 'checkbox',
								id: 'input'
							})));
							$('input').attr('value', "");
						}						
					}
				})
                $('button').on('click', function () {
					var val = $('input').val();
					if(val != "") {
						$('.unCheckedlst ul').append($('<li />', {
							text: val
						}).append($('<input />', {
							type: 'checkbox',
							id: 'input'
						})));
						$('input').attr('value', "");
					}						
				});
				
				$(document).on('click', '.unCheckedlst li', function() {
					$(this).remove();
					var val = $(this).text();							
					$('.checkedlst ul').append($('<li />', {
						text: val
					}).append($('<input />', {
						type: 'checkbox',
						id: 'input'						
					})));
				}).on('click', '.checkedlst li', function() {
					$(this).remove();
					var val = $(this).text();					
					$('.unCheckedlst ul').append($('<li />', {
						text: val
					}).append($('<input />', {
						type: 'checkbox',
						id: 'input'
					})));
				})					
			})();
