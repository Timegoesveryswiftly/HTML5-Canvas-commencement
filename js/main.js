(function(){
	'use strict';
	var stage = document.getElementById('stage');
	var ctx;
	var width = 485;
	var height = 300;
	var dpr;

	if (typeof stage.getContext === 'undefined') {
		return;
	}
	ctx = stage.getContext('2d');
	dpr = window.devicePixelRatio || 1;

	stage.width = width * dpr;
	stage.height = height * dpr;
	ctx.scale(dpr, dpr);
	stage.style.width = width + 'px';
	stage.style.height = height + 'px';

	ctx.strokeRect(81, 50, 97, 60);
	ctx.fillRect(120, 70, 97, 60);
	ctx.clearRect(140, 90, 76, 38);
})();
