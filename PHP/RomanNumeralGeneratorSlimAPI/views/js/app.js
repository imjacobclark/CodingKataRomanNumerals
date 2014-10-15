$('body').on('click', '[data-role="submit-numeral"]', function(e){
	var input = $('[data-input="numeral"]').val();
	
	$.ajax({
	    url: "http://178.62.120.97/PHP/RomanNumeralGeneratorSlimAPI/getInteger/" + input,
	    success: function(data){
		data = JSON.parse(data);
		$('[data-input="integer"]').empty();
		$("[data-result='integers']").empty();
		$("[data-result='numerals']").html("Result: " + data.result);
	    }
	});
	e.preventDefault();
});

$('body').on('click', '[data-role="submit-integer"]', function(e){
        var input = $('[data-input="integer"]').val();

        $.ajax({
            url: "http://178.62.120.97/PHP/RomanNumeralGeneratorSlimAPI/getNumerals/" + input,
            success: function(data){
                data = JSON.parse(data);
		$('[data-input="numeral"]').empty();
                $("[data-result='numerals']").empty();
                $("[data-result='integers']").html("Result: " + data.result);
            }
        });
        e.preventDefault();
});
