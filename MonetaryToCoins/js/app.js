Handlebars.registerHelper("log", function(context) {
	console.log(context);
});

Handlebars.registerHelper("outputCoins", function(context) {
	var output = "";	

	if(!context){
		return "Sorry, you entered an invalid number format. <br/> Allowed formats: 123p, £12.30, 1230, £12.30p, 1230p"
	}

	_.each(context, function(key,value,field){
		value = value/100;
		value = value.toString().split(".");

		if(value[1] == undefined)
			output = output + key + "x &pound;" + value[0] + ".00p <br/>";
		else if(value[1].length == 1)
			output = output + key + "x &pound;" + value[0] + "." + value[1] + "0p <br/>";
		else 
			output = output + key + "x &pound;" + value[0] + "." + value[1] + "p <br/>";
	});

	return output;

});