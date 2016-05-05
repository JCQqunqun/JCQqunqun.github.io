var indexTpl = require('../tpl/index.string');

SPA.defineView('index',{
	html:indexTpl,

	plugins:['delegated',{
		name:'avalon',
		potions:function(vm){
			vm.isActive = true;
		}
	}],

	modules:[{
 		name:"indexContent",
		container:".l-index-content",
		views:["home","item","classify","my"],
		defaultTag:"home"
	}],

	bindActions:{
		
		'tap.switch':function(e,data){
			this.modules.indexContent.launch(data.tag);
			$(e.el).addClass('active').siblings().removeClass('active');
		}

	},

	bindEvents:{
		'beforeShow':function(){
			this.vm = this.getVM()
		}
	}
})