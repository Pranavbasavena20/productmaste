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
	'sap/ui/model/Sorter',
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, models, Spreadsheet, exportLibrary, Filter, FilterOperator, Fragment, MessageToast, UIComponent, Sorter) {
		"use strict";
		var EdmType = exportLibrary.EdmType;
		return Controller.extend("productmaster.controller.ProductMaster", {
			onInit: function () {
				var oViewModel = new JSONModel({
					worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
					tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
					Status: "1",
					FormID: "",
					Brand: "",
					bSearch: true
				});
				var that = this;
				this.getOwnerComponent().setModel(oViewModel, "worklistView");
				this.getOwnerComponent().getModel("ProductMasterModel").loadData("./model/ProductData.json", true);
				this.getOwnerComponent().getModel("ProductMasterModel").attachRequestCompleted(function () {
					that.onSearchTable("onInit");
				});

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
				aFinalProducts = [];
				aProducts = this.getView().getModel("ProductMasterModel").getProperty('/ProductData');
				for (var key in aProducts) {
					aFinalProducts.push(aProducts[key].PRODUCT_DATA);
				}

				oSettings = {
					workbook: {
						columns: aCols
					},
					dataSource: aFinalProducts,
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
					label: 'Form ID',
					property: 'REQUEST_ID',
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
				},

				// {
				// 	label: 'Barcode',
				// 	property: 'BARCODE',
				// 	type: EdmType.String
				// }, 

				{
					label: 'Brand',
					property: 'BRAND_GROUP_DESC',
					type: EdmType.String
				}, {
					label: 'Status',
					property: 'PRODUCT_STATUS_DESC',
					type: EdmType.String
				}
				];
			},
			onPressNewProductIntroduction: function (oEvent) {
				this.getRouter().navTo("NewProductIntroduction", {
					Action: "New"
				});
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

					aStatus = this.getView().byId("idProductStatus").getSelectedItems();
				var aTableSearchState = [],
					aStatusFilter = [],
					sFormID = this.getView().byId("FormID").getValue(),
					sBrandGroup = this.getView().byId("BrandCode").getValue();
				if (sFormID)
					aTableSearchState.push(new Filter("PRODUCT_DATA/REQUEST_ID", FilterOperator.EQ, sFormID));
				if (sBrandGroup)
					aTableSearchState.push(new Filter("PRODUCT_DATA/BRAND_GROUP_DESC", FilterOperator.EQ, sBrandGroup));
				if (aStatus && aStatus.length > 0) {
					for (var i = 0; i < aStatus.length; i++) {
						aStatusFilter.push(new Filter("PRODUCT_DATA/PRODUCT_STATUS_DESC", FilterOperator.EQ, aStatus[i].getText()));
					}
					aTableSearchState.push(new Filter(aStatusFilter, false));
				}

				that._applySearch(aTableSearchState);

			},
			onPressAction: function (oEvent, sAction) {
				var sPath = oEvent.getSource().getBindingContext("ProductMasterModel").getPath();
				this.getView().getModel("ProductMasterModel").setProperty("/Path", sPath);
				this.getRouter().navTo("NewProductIntroduction", {
					Action: sAction
				});
			},
			_applySearch: function (aTableSearchState) {
				var that = this;
				var oTable = that.getView().byId("tbUserTable"),
					oViewModel = that.getOwnerComponent().getModel("worklistView");
				if (oTable.getBinding("items") !== undefined) {
					oTable.getBinding("items").filter(aTableSearchState, "Application");
				}

				// changes the noDataText of the list in case there are no filter results
				if (aTableSearchState.length !== 0) {
					oViewModel.setProperty("/tableNoDataText", that.getResourceBundle().getText("worklistNoDataWithSearchText"));
				}
			},
			onFilterClear: function (oEvent) {
				this.getView().byId("idProductStatus").setSelectedKeys([]);
				this.onSearchTable();
			},
			onSort: function (oEvent) {
				var that = this;
				that.oMainKey = oEvent.getSource();
				if (!that._oSortF4) {
					that._SortDialog = sap.ui.core.Fragment.load({
						id: that.createId("_SortF4"),
						name: "productmaster.fragments.Sort",
						controller: that
					}).then(function (oDialog) {
						that._oSortF4 = oDialog;
						that.getView().addDependent(that._oSortF4);
					});
				}
				that._SortDialog.then(function (oDialog) {
					that._oSortF4.open();
				}.bind(that));
			},
			handleSortDialogConfirm: function (oEvent) {
				var oTable = this.getView().byId("tbUserTable"),
					mParams = oEvent.getParameters(),
					oBinding = oTable.getBinding("items"),
					sPath,
					bDescending,
					aSorters = [];

				sPath = mParams.sortItem.getKey();
				bDescending = mParams.sortDescending;
				aSorters.push(new Sorter(sPath, bDescending));

				// apply the selected sort and group settings
				oBinding.sort(aSorters);
			},
			onDeleteItem: function (oEvent) {
				var that = this;
				var sPath = oEvent.getSource().getBindingContext("ProductMasterModel").getPath();
				that.oData = oEvent.getSource().getBindingContext("ProductMasterModel").getProperty(sPath);
				sap.m.MessageBox.confirm("Are you sure, you want to delete?", {
					onClose: function (sAction) {
						that.oData.splice(sPath, 1);
						that.getView().getModel("ProductMasterModel").refresh(true);
					}
				});
			},
			// Form ID
			onFormIDRequest: function (oEvent) {
				var that = this;
				that.oFormID = oEvent.getSource();
				if (!that._oFormIDF4) {
					that._FormIDDialog = sap.ui.core.Fragment.load({
						id: that.createId("_FormIDF4"),
						name: "productmaster.fragments.FormID",
						controller: that
					}).then(function (oDialog) {
						that._oFormIDF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oFormIDF4);
					});
				}
				that._FormIDDialog.then(function (oDialog) {
					that._oFormIDF4.open();
				}.bind(that));

			},
			_getFragmentText: function (FragId, id) {
				return sap.ui.core.Fragment.byId(this.createId(FragId), id);
			},
			onFormIDSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("onFormIDSearch", FilterOperator.Contains, sValue);
				this._getFragmentText("_FormIDF4", "idFormIDDialogF4").getBinding("items").filter([oFilter]);
			},
			onFormIDDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					var sTitle = oEvent.getParameter("selectedItem").getTitle();
					that.oFormID.setValue(sTitle);
				}
				if (that._oFormIDF4) {
					that._oFormIDF4.destroy();
					that._oFormIDF4 = undefined;
				}
			},
			// End of Form ID
			// Brand Group
			onBrandRequest: function (oEvent) {
				var that = this;
				that.oBrandGroup = oEvent.getSource();
				if (!that._oBrandGroupF4) {
					that._BrandGroupDialog = sap.ui.core.Fragment.load({
						id: that.createId("_BrandGroupF4"),
						name: "productmaster.fragments.BrandGroup",
						controller: that
					}).then(function (oDialog) {
						that._oBrandGroupF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oBrandGroupF4);
					});
				}
				that._BrandGroupDialog.then(function (oDialog) {
					that._oBrandGroupF4.open();
				}.bind(that));

			},
			onBrandGroupSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("BRAND_GROUP_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_BrandGroupF4", "idBrandGroupDialogF4").getBinding("items").filter([oFilter]);
			},
			onBrandGroupDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					var sTitle = oEvent.getParameter("selectedItem").getTitle();
					that.oBrandGroup.setValue(sTitle);
				}
				if (that._oBrandGroupF4) {
					that._oBrandGroupF4.destroy();
					that._oBrandGroupF4 = undefined;
				}
			},
			// End of Group
		});
	});