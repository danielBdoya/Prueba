/*global QUnit*/

sap.ui.define([
	"Workspace/Prueba/controller/ViewU.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewU Controller");

	QUnit.test("I should test the ViewU controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});