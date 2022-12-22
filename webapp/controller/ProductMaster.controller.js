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
				var oViewModel = new JSONModel({
					worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
					tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
					Status: "1"
				});
				this.getOwnerComponent().setModel(oViewModel, "worklistView");
				this.onSearchTable("onInit");
			},
			onUpdateFinished: function (oEvent) {
				var that = this,
					// update the worklist's object counter after the table update
					sTitle,
					oTable = oEvent.getSource(),
					iTotalItems = oEvent.getParameter("total");
				// only update the counter if the length is final and
				// the table is not empty
				if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
					sTitle = that.getResourceBundle().getText("worklistTableTitleCount", [iTotalItems]);
				} else {
					sTitle = that.getResourceBundle().getText("worklistTableTitle");
				}
				that.getOwnerComponent().getModel("worklistView").setProperty("/worklistTableTitle", sTitle);
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
			getResourceBundle: function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},
			onSearchTable: function (oEvent) {
				if (oEvent === "onInit") {
					this.getView().byId("idProductStatus").setSelectedKeys(["1"]);
				}
				var that = this,
					oView = that.getView(),
					oViewModel = this.getOwnerComponent().getModel("worklistView"),
					aStatus = this.getView().byId("idProductStatus").getSelectedKeys();
				var aTableSearchState = [],
					aStatusFilter = [];
				if (aStatus && aStatus.length > 0) {
					for (var i = 0; i < aStatus.length; i++) {
						aStatusFilter.push(new Filter("PRODUCT_STATUS", FilterOperator.EQ, aStatus[i]));
					}
					aTableSearchState.push(new Filter(aStatusFilter, false));
				}
				that._applySearch(aTableSearchState);

			},
			_applySearch: function (aTableSearchState) {
				var that = this;
				var oTable = that.getView().byId("tbUserTable"),
					oViewModel = that.getOwnerComponent().getModel("worklistView");
				oTable.getBinding("items").filter(aTableSearchState, "Application");
				// changes the noDataText of the list in case there are no filter results
				if (aTableSearchState.length !== 0) {
					oViewModel.setProperty("/tableNoDataText", that.getResourceBundle().getText("worklistNoDataWithSearchText"));
				}
			},
			onFilterClear: function (oEvent) {
				this.getView().byId("idProductStatus").setSelectedKeys([]);
				this.onSearchTable();
			}
		});
	});