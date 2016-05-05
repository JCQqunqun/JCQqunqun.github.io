var itemTpl = require("../tpl/item.string");
var fnUtil = require('../util/fn-util.js');

SPA.defineView('item',{
	html:itemTpl,

	init:{
		vm:null,
		handler:"#item-scroll",
		myScroll:null
	},

	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.dataItemList = [];
		}
	}],

	bindActions:{
		'tap.search':function(){
			SPA.show('search');
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var self = this;
			self.vm = this.getVM();

			self.myScroll = new IScroll(self.handler, {
			    probeType: 3,
			    mouseWheel: true
			});

			$.ajax({
				url:"/web-hardwork/json/item.json",
				success:function(res){
					if (res.ret) {
						self.vm.dataItemList = fnUtil.dataFormat(res.data);
						setTimeout(function(){
							self.myScroll.refresh();
						},0);
					}
				},
				error:function(res){
					// console.log(2);
				}
			});

			fnUtil.pullToRefresh({
				view:self
			});
		}
	}
})