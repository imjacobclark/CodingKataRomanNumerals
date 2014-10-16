require './src/RNGenerator.rb'

describe RNGenerator do
	it "should return false when a number over 3999 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(5000000)).to eq(false)
	end

	it "should return false when a number less than 1 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(-200)).to eq(false)
	end

	it "should return the string 'I' when 1 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(1)).to eq("I")
	end

	it "should return the string 'V' when 5 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(5)).to eq("V")
	end

	it "should return the string 'X' when 10 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(10)).to eq("X")
	end

	it "should return the string 'XX' when 20 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(20)).to eq("XX")
	end

	it "should return the string 'MMMCMXCIX' when 3999 is an argument" do
		rng = RNGenerator.new()
		expect(rng.generate(3999)).to eq("MMMCMXCIX")
	end

	it "should return the integer 1 when 'I' is an argument" do
		rng = RNGenerator.new()
		expect(rng.parse("I")).to eq(1)
	end

	it "should return the integer 5 when 'V' is an argument" do
		rng = RNGenerator.new()
		expect(rng.parse("V")).to eq(5)
	end

	it "should return the integer 10 when 'X' is an argument" do
		rng = RNGenerator.new()
		expect(rng.parse("X")).to eq(10)
	end

	it "should return the integer 20 when 'XX' is an argument" do
		rng = RNGenerator.new()
		expect(rng.parse("XX")).to eq(20)
	end

	it "should return the integer 3999 when 'MMMCMXCIX' is an argument" do
		rng = RNGenerator.new()
		expect(rng.parse("MMMCMXCIX")).to eq(3999)
	end
end
