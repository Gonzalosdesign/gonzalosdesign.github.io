(function() {
	
	let correctPics = 0;

	$('#prima_jenny').draggable( {
		snap: '#jenny',
		cursor: 'move',
		revert: true
	});
	
	$('#tio_john').draggable({
		snap: '#john',
		cursor: 'move',
		revert: true
	});

	$('#tia_karen').draggable({
		snap: '#karen',
		cursor: 'move',
		revert: true
	});

	$('#primo_larry').draggable({
		snap: '#larry',
		cursor: 'move',
		revert: true
	});

	$('#jenny').droppable({
		drop: handleDropEvent
	});
	
	$('#john').droppable({
		drop: handleDropEvent
	});

	$('#karen').droppable({
		drop: handleDropEvent
	});

	$('#larry').droppable({
		drop: handleDropEvent
	});

	function handleDropEvent( event, ui ) {
		var draggable = ui.draggable;
		
		var slotNumber = $(this).data('number');
		var picNumber = draggable.data('number');

		if(slotNumber == picNumber) {
			ui.draggable.addClass( 'correct' );
	    ui.draggable.draggable( 'disable' );
	    $(this).droppable( 'disable' );
	    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
	    ui.draggable.draggable( 'option', 'revert', false );
	    // ui.draggable.html('<img src="imgs/tio-john.png" alt="Tío John">');
	    correctPics++;
	    console.log(correctPics);	    
		}

		if(correctPics == 4) {
			$('#mensaje').fadeIn();
		}
			  
	}
}())