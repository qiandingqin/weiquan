define(function(require,exports,module){
	
	var Fn = {
		//获取文件名
		get_filename : function(link,a){
			var path = link || window.location.pathname;
			var pathArr = path.split('/');
			path = pathArr[pathArr.length-1];
			return a?path.split('.')[0]:path;
		},
		
		//上拉加载更多
		mui_up : function(cb,el){
			mui.init({
				pullRefresh: {
					container: el || '#pullrefresh',
					up: {
						contentrefresh: '正在加载...',
						callback: cb
					}
				}
			});
		},
	};
	
	exports.Fn = Fn;
	
});
