//评论,回复列表模块
define(function(require,exports,module){
	
	var Fn = require('function').Fn;
	//上拉加载 分页
	Fn.mui_up(function(){
		var _this = this;
		setTimeout(function(){
			_this.endPullupToRefresh();
		},1000);
	});
});
