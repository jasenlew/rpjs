var homeView = Backbone.View.extend({
	el: 'body',
	listEl: '.apples-list',
	cartEl: '.cart-box',
	template: _.template('Apple data: \
		<ul class="apples-list">\
		</ul>\
		<div class="cart-box"></div>'),

	initialize: function () {
		this.$el.html(this.template);
		this.collection.on('addToCart', this.showCart, this);
	},

	showCart: function (appleModel) {
		$(this.cartEl).append(appleModel.attributes.name + '<br/>');
	},

	render: function () {
		that = this;
		this.collection.each(function (apple) {
			var appleSubView = new appleItemView({model: apple});
			appleSubView.render();
			$(that.listEl).append(appleSubView.$el);
		});
	}
});