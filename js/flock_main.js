define(function(require,exports,module){
	
	//加载html组件
	require('./template_members.js');
	//模拟数据
	var dataArr = [
		{
			avatar : '../../images/test1.jpg',
			member_id : 1
		},
		{
			avatar : '../../images/expression.png',
			member_id : 1
		}
	];
	var v = new Vue({
		el : '.flock_admin',
		data : {data:dataArr},
		methods : {
			_setNewMain : _setNewMain,
			_setDeputyMain : _setDeputyMain,
			_removeMember : _removeMember,
			_pass : _pass,
			_refuse : _refuse,
			_submitSet : _submitSet,
		}
	});
	
	//事件处理
	//设置新群主
	function _setNewMain(){
		
		alert('设置新群主');
		
	};
	
	//设置副群主
	function _setDeputyMain(){
		alert('设置副群主');
	};
	
	//提出群
	function _removeMember(){
		alert('踢出群');
	};
	
	//通过申请
	function _pass(){
		alert('通过');
	};
	
	//拒绝申请
	function _refuse(){
		alert('拒绝');
	};
	
	//提交群设置
	function _submitSet(){
		alert('提交群设置');
	};
});
