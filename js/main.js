define(function(require,exports,module){
	
	var Fn = {
		
		get_filename : function(link,a){
			var path = link || window.location.pathname;
			var pathArr = path.split('/');
			path = pathArr[pathArr.length-1];
			return a?path.split('.')[0]:path;
		},
		
	};
	
	exports.Fn = Fn;
	
});
