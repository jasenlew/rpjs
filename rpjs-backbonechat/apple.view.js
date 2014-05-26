var appleView = Backbone.View.extend({

	initialize: function () {
		this.model = new (Backbone.Model.extend({}));
		this.model.on('change', this.render, this);
		this.on('spinner', this.showSpinner, this);
	},

	template: _.template('<figure>'
		+ '<img src="<%= attributes.url %>" />'
		+ '<figcaption><%= attributes.name %>'
		+ '</figcaption></figure>'
		),

	templateSpinner: '<img src="img/spinner.gif" width="30"/>',

	loadApple: function(appleName) {
		this.trigger('spinner');
		var that = this;
		setTimeout(function () {
			that.model.set(that.collection.where({
				name: appleName
			})[0].attributes);
		}, 1000);
	},

	render: function (appleName) {
		var appleHtml = this.template(this.model);
		$("body").html(appleHtml);
	},

	showSpinner: function () {
		$('body').html(this.templateSpinner);
	}
});