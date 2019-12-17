(function() {
	
	let correctPics = 0;

	$('#prima_jenny').draggable( {
		// snap: '#jenny',
		cursor: 'move',
		revert: true
	});
	
	$('#tio_john').draggable({
		// snap: '#john',
		cursor: 'move',
		revert: true
	});

	$('#tia_karen').draggable({
		// snap: '#karen',
		cursor: 'move',
		revert: true
	});

	$('#primo_larry').draggable({
		// snap: '#larry',
		cursor: 'move',
		revert: true
	});

	
	setTimeout(function() { 
    $('#mensaje').fadeIn(); 
  }, 15000);

	
}())