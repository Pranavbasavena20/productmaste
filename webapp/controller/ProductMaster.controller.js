sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/models",
		"sap/ui/export/Spreadsheet",
		'sap/ui/export/library',
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/core/Fragment",
		'sap/m/MessageToast',
		"sap/ui/core/UIComponent",
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, models, Spreadsheet, exportLibrary, Filter, FilterOperator, Fragment, MessageToast, UIComponent) {
		"use strict";
		var EdmType = exportLibrary.EdmType;
		return Controller.extend("productmaster.controller.ProductMaster", {
			onInit: function () {
				var oModel = new JSONModel();
				oModel.loadData("./model/ProductData.json", null, false);
				this.getView().setModel(oModel, "ProductMasterModel");
			},
			onDownload: function (oEvent) {
				var aCols, aProducts, oSettings, oSheet;
				aCols = this.createColumnConfig();
				aProducts = this.getView().getModel("ProductMasterModel").getProperty('/ProductData');

				oSettings = {
					workbook: {
						columns: aCols
					},
					dataSource: aProducts,
					fileName: "Products"
				};

				oSheet = new Spreadsheet(oSettings);
				oSheet.build()
					.then(function () {
						MessageToast.show('Product exported successfully..!!');
					})
					.finally(oSheet.destroy);
			},

			createColumnConfig: function () {
				return [{
					label: 'Product ID',
					property: 'PRODUCT_ID',
					type: EdmType.Number,
					scale: 0
				}, {
					label: 'Product Description',
					property: 'PRODUCT_SHORT_DESC',
					type: EdmType.String
				}, {
					label: 'Pack Size',
					property: 'PACK_SIZE',
					type: EdmType.String
				}, {
					label: 'Country Of Origin',
					property: 'COUNTRY_OF_ORIGIN',
					type: EdmType.String
				}, {
					label: 'Barcode',
					property: 'BARCODE',
					type: EdmType.String
				}, {
					label: 'Brand',
					property: 'BRAND_CODE',
					type: EdmType.String
				}, {
					label: 'Status',
					property: 'PRODUCT_STATUS_DESC',
					type: EdmType.String
				}];
			},
			onPressNewProductIntroduction: function (oEvent) {
				this.getRouter().navTo("NewProductIntroduction");
			},
			getRouter: function () {
				return UIComponent.getRouterFor(this);
			},
		});
	});