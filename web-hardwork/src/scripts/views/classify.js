var classifyTpl = require("../tpl/classify.string");

SPA.defineView('classify',{
	html:classifyTpl,

	plugins:['delegated'],

	init:{
		classifySwiper:null
	},

	bindActions:{

		'tap.classify.switch':function(e,data){
			$(e.el).addClass('active').siblings().removeClass('active');
			this.classifySwiper.slideTo($(e.el).index());
			
		},
		'tap.search':function(){
			SPA.show('search');
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var self = this;
			self.classifySwiper = new Swiper('#classify-swiper',{
				loop:false,
				onTransitionEnd:function(){
					$('#classify-nav li').eq(self.classifySwiper.activeIndex)
						.addClass('active')
						.siblings()
						.removeClass('active');
				}
			})
		}
	}
})