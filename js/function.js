var popupId;

function popUp(a){
	$('#popup' + a).toggleClass("hidden");
	$('#canvas').toggleClass("blur");
}

$('.btRuang').click(function(event){
	event.preventDefault();
	popUp("1");
});

$('.btKuliah').click(function(event){
	event.preventDefault();
	popUp("2");
});

$('.btPinjam').click(function(event){
	event.preventDefault();
	popUp("3");
});

$('.task--add').click(function(event){
	var thisTarget = $(event.target);
	var thisParent = thisTarget.parents('div');
	popupId = thisParent.attr('id');

	event.preventDefault();
	popUp("3");
});