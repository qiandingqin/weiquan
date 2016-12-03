define(function(require,exports,module){
	var Fn = require('fn').Fn;
	/*头部模版
	 * title 设置标题内容
	 * search = true 显示搜索按钮
	 * back = true 显示后退按钮
	 */
	Vue.component('wang-header',{
		props:['title','search','ordinary','back','search_text','menu'],
		template : '<header id="header" class="mui-bar mui-bar-nav">\
						<h1 class="mui-title">{{title}}</h1>\
						<button v-if="back" class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">\
							<span class="mui-icon mui-icon-left-nav"></span>\
							<span class="header_text">返回 </span>\
						</button>\
						<a class="search_btn" v-if="search" href="/微圈/container/theme/search.html"></a>\
						<a class="search_text mui-pull-right" v-if="search_theme" @tap="search_theme">{{search_text}}</a>\
						<a class="mui-icon mui-icon-bars mui-pull-right" v-if="menu" @tap="openMenu"></a>\
					</header>',
		methods:{
			open : _open,
			search_theme : function(){
				alert('搜索主题');
			},
			openMenu : function(){
				var topMenu = document.querySelector('div.top_menu');
				topMenu.classList.remove('mui-hidden');
			}
		}
	});
	
	Vue.component('wang-footer',{
		methods:{
			open : _open
		},
		template : '\
			<nav class="mui-bar mui-bar-tab footer">\
				<a class="mui-tab-item" @tap="open" href="/微圈/index.html">\
					<span class="footer_icon"><img src="/微圈/images/home.png" /></span>\
					<span class="mui-tab-label">首页</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="/微圈/container/flock/create_flock.html">\
					<span class="footer_icon"><img src="/微圈/images/addCircle.png" /></span>\
					<span class="mui-tab-label">建群</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="/微圈/container/circle/friends.html">\
					<span class="footer_icon"><img src="/微圈/images/circle.png" /></span>\
					<span class="mui-tab-label">朋友圈</span>\
				</a>\
				<a class="mui-tab-item" @tap="open" href="/微圈/container/member/member.html">\
					<span class="footer_icon"><img src="/微圈/images/my.png" /></span>\
					<span class="mui-tab-label">我的</span>\
				</a>\
			</nav>\
		'
	});
	
	Vue.component('wang-members-list',{
		props :['data'],
		template : '\
			<ul class="flock_members pad15 mui-clearfix">\
				<li>\
					<label for="members_checkbox"><img src="../../images/test1.jpg" /></label>\
					<p><input type="checkbox" id="members_checkbox" /></p>\
				</li>\
			</ul>\
		',
	});
	
	new Vue({
		el : '#app'
	});
	
	//打开搜索页面
	function _open(_this){
		/*_this = _this.currentTarget;
		if(_this.href && _this.href != 'javascript:;'){
			window.location.href = _this.href;
		};*/
	};
	
	//底部选项卡高亮
	mui.ready(function(){
		
		var navA = document.querySelectorAll('nav.mui-bar a');
		if(!navA.length)return;
		var index = {
			index : 0,
			create_flock : 1,
			friends : 2,
			member : 3
		};
		//当前页面对应的按钮
		var curA = navA[index[Fn.get_filename(null,true)]];
		var curImg = curA.querySelector('img');
		var old_src = curImg.src;
		//文件名
		var fileName = Fn.get_filename(old_src);
		var name = fileName.split('.');
		var newName = name[0] + '_active.' + name[1];
		//组装新路径
		var newPathArr = old_src.split('/');
		newPathArr.splice(newPathArr.length-1);
		curA.classList.add('color');
		curImg.src = newPathArr.join('/') + '/' + newName;
			
	});
	
});
