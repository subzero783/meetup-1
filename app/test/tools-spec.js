'use strict';

var expect = require('chai').expect;
var tools = require('../lib/tools');
var nock = require('nock');


describe("Tools", function(){
	
	describe("printName()", function(){
		it("should print the last name first", function(){
			var results = tools.printName({ first: "Alex", last: "Banks" });
			expect(results).to.equal("Banks, Alex");
		});
	});	
	
	describe("loadWiki()", function(){
		var mockReturnText = "Mock Abraham Lincoln Wikipedia Page";
		before(function(){
			nock("https://en.wikipedia.org").get("/wiki/Abraham_Lincoln").reply(200, mockReturnText);
		});
		
		it("Load Abraham Lincoln's Wikipedia Page", function(done){
			tools.loadWiki({
				first: "Abraham", 
				last: "Lincoln"
			}, function(html){
				expect(html).to.equal(mockReturnText);
				done();
			});
		});
	});
	
});

