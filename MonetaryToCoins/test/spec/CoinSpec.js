describe("The coin model", function() {
  it("should return a object with an attribute object containing { 1 : 1, 2 : 1, 20 : 1, 100 : 1 } when 123 is passed as an argument", function() {

    var coin = new Coin();
    answer = coin.compute("123");

    expect(answer).toEqual({ 1 : 1, 2 : 1, 20 : 1, 100 : 1 });
    expect(typeof answer).toEqual("object");

  });

  it("should return a object with an attribute object containing {2: 2, 10: 1, 20: 1, 200: 6}  when 12.34 is passed as an argument", function() {

    var coin = new Coin();
    answer = coin.compute("12.34");

    expect(answer).toEqual({2: 2, 10: 1, 20: 1, 200: 6} );
    expect(typeof answer).toEqual("object");

  });

  it("should return false when 13x is passed in", function() {

    var coin = new Coin();
    answer = coin.compute("13x");

    expect(answer).toEqual(false);
    expect(typeof answer).toEqual("boolean");

  });

  it("should return false when 13p.02 is passed in", function() {

    var coin = new Coin();
    answer = coin.compute("13p.02");

    expect(answer).toEqual(false);
    expect(typeof answer).toEqual("boolean");

  });

  it("should return false when £p is passed in", function() {

    var coin = new Coin();
    answer = coin.compute("£p");

    expect(answer).toEqual(false);
    expect(typeof answer).toEqual("boolean");

  });
});
