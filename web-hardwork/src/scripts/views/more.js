var moreTpl = require('../tpl/more.string');

SPA.defineView('more',{
	html:moreTpl,

	plugins:['delegated'],

	bindActions:{
		'tap.more.return':function(){
			this.hide();
		}
	},

	bindEvents:{
		'beforeShow':function(){

		}
	}
})