var CoinRouter = Backbone.Router.extend({
    routes: {
        "": "renderIndex"
    }
});

var coinrouter = new CoinRouter;

coinrouter.on('route:renderIndex', function() {
	// Render our MainView into the content div
    var mainview = new MainView({ el: $("[data-main='content']") });
})

Backbone.history.start();
