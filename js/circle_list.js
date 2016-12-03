define(function(require){
	
	var Fn = require('fn').Fn;
	
	Fn.mui_up(function(){
		var _this = this;
		setTimeout(function(){
			_this.endPullupToRefresh();
		},1000);
	});
	
});
