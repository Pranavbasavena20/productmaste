/*global QUnit*/

sap.ui.define([
	"productmaster/controller/ProductMaster.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProductMaster Controller");

	QUnit.test("I should test the ProductMaster controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
