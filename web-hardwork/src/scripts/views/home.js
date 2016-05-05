var homeTpl = require("../tpl/home.string");
require("../lib/swiper-3.3.1.min.js");
var fnUtil = require('../util/fn-util.js');


SPA.defineView('home',{
	html:homeTpl,

	init:{
		vm:null,
		handler:"#home-scroll",
		myScroll:null
	},

	plugins:['delegated',{
		name:"avalon",
		options:function(vm){
			vm.dataList = [];
		}
	}],

	bindActions:{
		'tap.search':function(){
			SPA.show('search');
		}
	},

	bindEvents:{
		'beforeShow':function(){

			var swiper = new Swiper('#home-swiper', {
		       
		       	// pagination: '.swiper-pagination',
		        // paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false,
		        loop:true
		       
    		});

			var self = this;
			
			 self.vm = self.getVM();

			self.myScroll = new IScroll(self.handler, {
			    probeType: 3,
			    mouseWheel: true
			});

    		$.ajax({
    			url:"/web-hardwork/json/home.json",
    			success:function(res){
    				if ( res.ret ) {
    					self.vm.dataList = res.data;
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