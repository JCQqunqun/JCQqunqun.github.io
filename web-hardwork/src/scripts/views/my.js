require('../lib/swiper-3.3.1.min.js');
var myTpl = require("../tpl/my.string");

SPA.defineView('my',{
	html:myTpl,

	plugins:['delegated'],

	init:{
		myFirSwiper:null
	},
	bindActions:{
		'tap.my.collect1':function(e,data){
			$(".my-i").removeClass('active2 active').addClass('active1');
			this.myFirSwiper.slideTo($(e.el).index());
		},
		'tap.my.collect2':function(e,data){
			$(".my-i").removeClass('active1 active').addClass('active2');
			this.myFirSwiper.slideTo($(e.el).index());
		},
		'tap.more':function(){
			SPA.show('more');
		},
		'tap.login':function(){
			SPA.show('login');
		}
	},
	bindEvents:{
		'beforeShow':function(){
			var self=this;
			self.myFirSwiper=new Swiper('#my-swiper',{
				loop:false,
				onSlideChangeEnd:function(){
					if ( self.myFirSwiper.activeIndex == 0 ) {
						$(".my-i").removeClass('active2 active').addClass('active1');
					}else{
						$(".my-i").removeClass('active1 active').addClass('active2');
					}
					
				}
			})
		}
	}

	// bindActions:{
	// 	'tap.my.collect':function(e,data){

	// 		this.myFirSwiper.slideTo($(e.el).index());
	// 		// var ind = $(e.el).index();
	// 		// var wid = $(e.el).width();
	// 		// console.log(wid);
	// 		// $("#my-i").animate({"left":wid*ind});
	// 	}
	// },
	// bindEvents:{
	// 	'beforeShow':function(){
	// 		var slef = this;
	// 		self.myFirSwiper = new Swiper('#my-swiper',{
	// 			loop:false
	// 			// onSlideChangeEnd:function(){
	// 			// 	$("#my-ul li").eq(self.mySwiper.activeIndex)

	// 			// }
	// 		})
	// 	}
	// }
})