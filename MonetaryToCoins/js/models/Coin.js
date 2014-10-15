var Coin = Backbone.Model.extend({
    defaults: {
        coins:  [200,100,50,20,10,5,2,1]
    },
    initialize: function(){
    },
    sanitiseInput: function(input){
        // Strip out all charicters
        return input.replace(/[£\.p]+/g, '');
    },
    validateInput: function(input){
            // Match £(optional), any amount of digits from 0-9, period (.) and more digits (optional), pence (p)(optional)
            var match = /^(\£)?([0-9])*((\.\d{0,})?)(p)?$/;
            if(match.test(input))
                return this.sanitiseInput(input);
            else
                return false;
        
    },
    compute: function(amount){

        // Validate the input
        amount = this.validateInput(amount);

        // If validate returned false, there was an issue with validation, return false.
        if(!amount)
            return false;
        
        var _this = this;
        var result = {};

        // Iterate through each coin
        _.forEach(this.attributes.coins, function(coin){
            while(amount >= coin){

                if(result[coin] == undefined)
                    result[coin] =  1;  
                else
                    result[coin] =  result[coin] + 1;

                amount = amount - coin;
            }

        });

        return result;
    }
});