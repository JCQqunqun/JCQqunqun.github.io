var loginTpl = require("../tpl/login.string");

SPA.defineView('login',{
	html:loginTpl,

	plugins:['delegated'],

	bindActions:{
		'tap.login.return':function(){
			this.hide();
		},
		'tap.register':function(){
			SPA.show('register');
		}
	}
})