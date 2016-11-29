//创建群
define(function(require,exports,module){
	
	//加载头底部
	require('./template');
	
	var v = new Vue({
		el : ".mui-content",
		data : {
			name : ''
		},
		methods : {
			flock_submit :flock_submit
		}
	});
	
	//提交
	function flock_submit(){
		alert('提交')
	};
});
