define(function(require,exports,module){
	//成员列表
	Vue.component('wang-members-list',{
		props :['data'],
		template : '\
			<ul class="flock_members pad15 mui-clearfix">\
				<li v-for="v in data">\
					<label for="members_checkbox"><img :src="v.avatar" /></label>\
					<p><input type="checkbox" id="members_checkbox" /></p>\
				</li>\
			</ul>\
		',
	});
	
	//选择成员数 查找
	Vue.component('wang-members-activenums',{
		props:['active','not_active'],
		template: '\
			<div>\
				<div class="search_box">\
					<input type="text" name="" placeholder="搜索群成员"/>\
					<a href="javascript:;">\
						<i class="mui-icon mui-icon-search"></i>\
						<span @tap="find">查找</span>\
					</a>\
				</div>\
				<p class="nums">\
					<span>全部成员</span>\
					<span>已选({{active}})</span>\
					<span>未选({{not_active}})</span>\
				</p>\
			</div>\
		',
		methods:{
			find : _find
		}
	});
	
	//查找群成员
	function _find(){
		
		alert(2);
		
	};
});
