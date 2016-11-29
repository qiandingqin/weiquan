define(function(require){
	var dataJson = [];
	
	//渲染数据
	var v = new Vue({
		el : "#datas",
		data: { dataJson : dataJson},
		methods:{
			share : _share,
			collect : _collect,
			praise : _praise
		}
	});
	
	//加载头,底部模版
	require('./template.js');
	
	
	getData();
	
	function getData(){
		
		//模拟数据
		var dataArr = [
			{
				//用户信息
				member:{
					avatar : 'http://p5.gexing.com/GSF/touxiang/20161124/1808/5836bc2833093.jpg@!200x200_3?recache=20131108',
					name : '群草',
					isowner : true,
					addtime : 1480408730
				},
				
				//文章信息
				theme:{
					theme_id    : 1,
					is_collect : false,		//是否已收藏
					is_praise : false,		//是否已赞
					theme_title : '挨个萌妹看过来',
					theme_text : '净身高153~穿鞋157把。平常的穿搭术语可爱风~这是森女部落的卫衣+34cm的短裙~毕竟...',
					theme_image : [
						'http://img1.gtimg.com/gamezone/pics/hv1/67/86/2069/134558722.jpg',
						'http://img1.gtimg.com/gamezone/pics/hv1/67/86/2069/134558722.jpg',
						'http://img1.gtimg.com/gamezone/pics/hv1/67/86/2069/134558722.jpg',
						'http://img1.gtimg.com/gamezone/pics/hv1/21/86/2069/134558676.jpg'
					]
				}
			},
			{
				//用户信息
				member:{
					avatar : 'http://p5.gexing.com/GSF/touxiang/20161124/1808/5836bc2833093.jpg@!200x200_3?recache=20131108',
					name : '群草',
					isowner : true,
					addtime : 1480408730
				},
				
				//文章信息
				theme:{
					theme_id    : 1,
					is_collect : false,		//是否已收藏
					is_praise : false,		//是否已赞
					theme_title : '挨个萌妹看过来',
					theme_text : '净身高153~穿鞋157把。平常的穿搭术语可爱风~这是森女部落的卫衣+34cm的短裙~毕竟...',
					theme_image : [
						'http://img1.gtimg.com/gamezone/pics/hv1/19/86/2069/134558674.jpg'
					]
				}
			}
		];
		//获取数据
		/*mui.ajax({
			
		});*/
		
		//如果从服务器获取到数据了
		v.dataJson = dataArr;
	};
	
	//事件处理
	//分享
	function _share(data){
		alert('分享');
		console.log(data);
	};
	
	//收藏
	function _collect(id){
		alert('收藏');
	};
	
	//点赞
	function _praise(id){
		alert('点赞');
	};
	
	//分页
	mui.init({
		pullRefresh: {
			container: '#pullrefresh',
			up: {
				contentrefresh: '正在加载...',
				callback: function(){
					var _this = this;
					setTimeout(function(){
						_this.endPullupToRefresh();
					},1000);
				}
			}
		}
	});
});
