var control = document.querySelector('[data-control]');
var op = {
	alias : {
		'function':'./function.js'
	}
};
if(control){
	op.vars = { 'control': control.dataset.control }
};

seajs.config(op);

define(function(require,exports,module){
	//加载公用头部底部模块
	require('./template.js');
	//根据每个页面根元素的id加载对应父控制器 本应该理由路由做的,但防止以后后端要修改文件名或后缀就在根元素加id模拟路由
	if(control)require.async('./{control}.js');
});
