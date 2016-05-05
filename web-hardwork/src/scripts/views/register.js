var registerTpl = require("../tpl/register.string");

SPA.defineView('register',{
	html:registerTpl,

	plugins:['delegated'],

	bindActions:{
		'tap.login.return':function(){
			this.hide();
		}
	}
})