var MainView = Backbone.View.extend({

	events: {
      "keypress #ammount" : "renderAnswer"
    },

    initialize: function(){
        this.render();
    },
    render: function(){
    	// Compile the Handlebars template and inject it into the DOM
        var source   = $("#input-template").html();
		var template = Handlebars.compile(source);
        this.$el.html( template );
    },
    renderAnswer: function(e){
    	if(e.keyCode == 13){

            $("[data-main='answer']").empty();
    		
            amount = $("[data-input='ammount']").val();

    		var coin = new Coin();
    		answer = coin.compute(amount);

    		var source   = $("#output-template").html();
			var template = Handlebars.compile(source);

            if(answer == false)
                $("[data-main='answer']").append( template(false) );
            else
	           $("[data-main='answer']").append( template(answer) );

    	};
    }
});

