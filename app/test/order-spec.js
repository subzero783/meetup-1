'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');
var sinon = require('sinon');

var order = rewire('../lib/order')

describe("Ordering Items", () => {

	beforeEach(() => {
		this.testData = [
			{
				sku: "AAA",
				qty:10
			},
			{
				sku: "BBB", 
				qty: 0
			},
			{
				sku: "CCC", 
				qty: 3
			}
		]

		order.__set__("inventoryData", this.testData)
	})

	it("Order an item when there are enough is stock", function(done){
		order.orderItem("CCC", 3, () => {
			done();
		});
	});

});