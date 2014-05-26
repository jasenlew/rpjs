var appleData = [
	{
		name: "fuji",
		url: "img/fuji.jpeg"
	},
	{
		name: "gala",
		url: "img/gala.jpeg"
	}
];

var app;

var router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'apples/:appleName': 'loadApple'
	},

	initialize: function () {
		var apples = new Apples();
		apples.reset(appleData);
		console.log(apples);
		this.homeView = new homeView({collection: apples});
		this.appleView = new appleView({collection: apples});
	},

	home : function () {
		this.homeView.render();
	},

	loadApple: function (appleName) {
		this.appleView.loadApple(appleName);
	}
});

		
$(document).ready(function () {
	app = new router;
	Backbone.history.start();
});