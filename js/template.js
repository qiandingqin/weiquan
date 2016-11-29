define([],function(require,exports,module){
	/*头部模版
	 * title 设置标题内容
	 * mothod 设置不同的header内容 
	 * mothod = ordinary 带返回按钮 与标题
	 * mothod = search 带返回按钮 与标题 与搜索按钮
	 * mothod = title 只有标题
	 */
	Vue.component('wang-header',{
		props:['title','search','ordinary','back'],
		template : '<header id="header" class="mui-bar mui-bar-nav">\
						<h1 class="mui-title">{{title}}</h1>\
						<button v-if="back" class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">\
							<span class="mui-icon mui-icon-left-nav"></span>\
							<span class="header_text">返回 </span>\
						</button>\
						<span class="search_btn" v-if="search" @click="open" href=""></span>\
					</header>',
		methods:{
			open : _open,
		}
	});
	
	Vue.component('wang-footer',{
		methods:{
			open : _open
		},
		template : '\
			<nav class="mui-bar mui-bar-tab footer">\
				<a class="mui-tab-item" @tap="open" href="javascript:;">\
					<span class="footer_icon"><img src="/微圈/images/home.png" /></span>\
					<span class="mui-tab-label">首页</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="./container/other/create_flock.html">\
					<span class="footer_icon"><img src="/微圈/images/addCircle.png" /></span>\
					<span class="mui-tab-label">建群</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="javascript:;">\
					<span class="footer_icon"><img src="/微圈/images/circle.png" /></span>\
					<span class="mui-tab-label">朋友圈</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="javascript:;">\
					<span class="footer_icon"><img src="/微圈/images/my.png" /></span>\
					<span class="mui-tab-label">我的</span>\
				</a>\
			</nav>\
		'
	});
	
	new Vue({
		el : '#app'
	});
	
	//打开搜索页面
	function _open(_this){
		var href = _this.target.href;
		if(href && href != 'javascript::'){
			window.location.href = href;
		};
	};
	
	//底部选项卡高亮
	function _tab_active(){
		
		alert(2);
		
	};
	
});
