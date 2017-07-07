const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	//success
	it('should return number divideable by 15 as fizzbuzz', function(){
		
		const normalCase = [{a: 15, expected:'fizz-buzz'},	{a: 30, expected:'fizz-buzz'}];
		normalCase.forEach(function(input) {
     		const answer = fizzBuzzer(input.a);
      		answer.should.equal(input.expected);
   		 });
	});
	it('should return number divideable by 5 as buzz', function(){
		
		const normalCase = [{a: 5, expected:'buzz'},	{a: 10, expected:'buzz'}];
		normalCase.forEach(function(input) {
     		const answer = fizzBuzzer(input.a);
      		answer.should.equal(input.expected);
   		 });
	});
	it('should return number divideable by 3 as fizz', function(){
	
		const normalCase = [{a: 3, expected:'fizz'},	{a: 9, expected:'fizz'}];
		normalCase.forEach(function(input) {
 			const answer = fizzBuzzer(input.a);
  			answer.should.equal(input.expected);
	 });
	});
	it('should return number', function(){
	
		const normalCase = [{a: 13, expected:13},	{a: 8, expected:8}];
		normalCase.forEach(function(input) {
 			const answer = fizzBuzzer(input.a);
  			answer.should.equal(input.expected);
	 });
	});

	//failure
	it('should raise error if args not numbers', function() {
   		const badInputs = [ 'cat', "dog"]
   		badInputs.forEach(function(input) {
      		(function() { fizzBuzzer(input)
      		}).should.throw(Error);
   		});
	});

});