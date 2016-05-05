var guideTpl = require("../tpl/guide.string");

SPA.defineView("guide",{
	html:guideTpl,

	plugins:['delegated'],

	bindActions:{
		'goto.index':function(){
			SPA.show('index')
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var guideSwiper = new Swiper("#guide-swiper",{
				loop:false
			})
		}
	}
})