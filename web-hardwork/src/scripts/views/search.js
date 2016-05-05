var searchTpl = require("../tpl/search.string");

SPA.defineView('search',{
	html:searchTpl,

	init:{
		vm:null,
		searchSwiper:null
	},

	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.isExist = true,
			vm.keyWord = '',
			vm.getData = function(){
				console.log(vm.keyWord);
			}
		}
	}],

	bindActions:{
		'tap.search.collect1':function(e,data){
			$(".my-i").removeClass('active2 active').addClass('active1');
			this.searchSwiper.slideTo($(e.el).index());
		},
		'tap.search.collect2':function(e,data){
			$(".my-i").removeClass('active1 active').addClass('active2');
			this.searchSwiper.slideTo($(e.el).index());
		},
		'tap.return':function(){
			this.hide();
		},
		'tap.search.love':function(){
			this.vm.isExist = true;
		}
	},

	bindEvents:{
		'beforeShow':function(){
			var self = this;

			self.vm = self.getVM();

			self.searchSwiper = new Swiper('#search-swiper',{
				loop:false,
				onSlideChangeEnd:function(){
					if ( self.searchSwiper.activeIndex == 0 ) {
						$(".my-i").removeClass('active2 active').addClass('active1');
					}else{
						$(".my-i").removeClass('active1 active').addClass('active2');
					}
					
				}
			})
		}
	}


})