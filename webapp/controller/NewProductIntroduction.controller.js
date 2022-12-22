sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"productmaster/utils/dataUtil",
		"sap/ui/core/UIComponent",
		"sap/ui/core/Fragment",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/MessageBox",
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, dataUtil, UIComponent, Fragment, Filter, FilterOperator, MessageBox) {
		"use strict";

		return Controller.extend("productmaster.controller.NewProductIntroduction", {

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf productmaster.view.NewProductIntroduction
			 */
			onPressImage: function () {
				sap.m.MessageToast.show("I am pressed");
			},
			onInit: function () {
				var oViewModel = new sap.ui.model.json.JSONModel({
					bForCastAdd: true,
					bForcastMonthAdd: true,
					bComparsion: true,
					bProductVarainat: false,
					bMerchandise: false
				});
				this.getOwnerComponent().setModel(oViewModel, "NPIView");
				var oModelSizes = new sap.ui.model.json.JSONModel({
					pane1: "auto",
					pane2: "auto",
					pane3: "auto"
				});

				this.getView().setModel(oModelSizes, "sizes");
				var oModel = dataUtil.createJsonModel();

				oModel.setData({
					"sNext": true,
					"sSubmit": false,
					"sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg"),
					"sAvatar": {
						"totalCount": 15,
						"content": [{
							"initials": "JD",
							"name": "John Doe",
							"tooltip": "1",
							"jobPosition": "Marketing Manager",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla",
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWQzXJTIHWygwXdQurV3i69zY1T9Wr7Z5oQ&usqp=CAU",
							"initials": "SP",
							"name": "Sarah Parker",
							"tooltip": "2",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrEZJZ_56BfvYCZ1XNGsMI2bFiPoIMTg55w&usqp=CAU",
							"initials": "JG",
							"name": "Jason Goldwell",
							"tooltip": "3",
							"jobPosition": "Software Developer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltkDf1u3xe0mLA3w88vTyhKcvINTccMGeDw&usqp=CAU",
							"name": "Christian Bow",
							"jobPosition": "Marketing Manager",
							"tooltip": "4",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZW4-gayliqsg3JLj4aWzIblxUizG1q9dYHX6p3P-RUkfXlBX-nXJ9QffvFUAKsqHtck&usqp=CAU",
							"tooltip": "5",
							"name": "Jessica Parker",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlLQzhCMBy0UsaU6njTZfvQ1-DrGXG-Qr6w&usqp=CAU",
							"initials": "JB",
							"name": "Jonathan Bale",
							"jobPosition": "Software Developer",
							"tooltip": "6",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"initials": "GS",
							"name": "Gordon Smith",
							"jobPosition": "Marketing Manager",
							"tooltip": "7",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"fallbackIcon": "sap-icon://person-placeholder",
							"name": "Simon Jason",
							"tooltip": "8",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"initials": "JS",
							"name": "Jason Swan",
							"jobPosition": "Software Developer",
							"tooltip": "9",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3eEBULODqQVXILAkPvHT2qxyFfTFn7q0PQ&usqp=CAU",
							"initials": "JC",
							"name": "John Carter",
							"jobPosition": "Marketing Manager",
							"tooltip": "10",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"name": "Whitney Parker",
							"tooltip": "11",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}]
					}
				});

				this.getView().setModel(oModel, "oLanding");

			},
			onChangeProductCat: function (oEvent) {

				if (oEvent.getSource().getSelectedKey() === "Product With Variant") {
					this.getView().getModel("NPIView").setProperty("/bProductVarainat", true);
				} else {
					this.getView().getModel("NPIView").setProperty("/bProductVarainat", false);
				}
			},
			onGetVolume: function (oEvent) {
				var oObject = oEvent.getSource().getBindingContext("oNPI").getObject(),
					sPath = oEvent.getSource().getBindingContext("oNPI").getPath();
				if (oObject.DEPTH !== "" && oObject.WIDTH !== "" && oObject.HEIGHT !== "") {
					var iFinalVal = parseInt(oObject.DEPTH) * parseInt(oObject.WIDTH) * parseInt(oObject.HEIGHT);
					this.getView().getModel("oNPI").setProperty(sPath + "/Volume", iFinalVal);
				}
			},
			onUOM: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: true,
					Volume: ""
				};
				oModel.getData().PRODUCT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeleteUOM: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_UOM_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddComparsion: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					BRAND_DESC: "",
					PACKAGING: "",
					SELLING_PRICE: ""

				};
				oModel.getData().PRODUCT_COMPARISION.push(object);
				oModel.updateBindings(true);
				if (oModel.getData().PRODUCT_COMPARISION.length >= 3) {
					this.getView().getModel("NPIView").setProperty("/bComparsion", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bComparsion", true);
				}
			},
			onDeleteComparsion: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_COMPARISION;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 3) {
					this.getView().getModel("NPIView").setProperty("/bComparsion", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bComparsion", true);
				}
			},
			onPricing: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: true
				};
				oModel.getData().PRODUCT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeletePricing: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_PRICING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddProductAtt: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					VENDOR_ID: "",
					PRODUCT_ID: "",
					LABEL_CODE: "",
					LABEL_CODE_VALUE: "",
					DELETED: "",
					ACTIVE: "",
					VALID_FROM: "",
					VALID_TO: ""
				};
				oModel.getData().PRODUCT_ATTRIBUTE_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeleteProductAttTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_ATTRIBUTE_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			// Forcast Start 
			AddAttribute: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_ATTIBUTES;

				var object = {
					FORECAST_ATTRIBUTE_NAME: "",
					FORECAST_ATTRIBUTE_VALUE: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oModelData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", true);
				}

			},
			AddForeCast: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_MONTHS;
				var object = {
					MONTH_NAME: "",
					MONTH_VALUE: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oModelData.length >= 6) {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", true);
				}
			},
			onDeleteForcastTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[3]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_ATTIBUTES;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", true);
				}

			},
			onDeleteForeCastTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[3]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_MONTHS;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", true);
				}
			},

			// Forcast End 

			// Marketing
			AddMarketing: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_MARKETING_LIST;
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					MEDIA_TYPE: "",
					AMOUNT: "",
					FREQUENCY: "",
					PERIOD_START_DATE: "",
					PERIOD_END_DATE: "",
					ACTIVE: "",
					DELETED: "",
					VALID_FROM: "",
					VALID_TO: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteMarketingTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_MARKETING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddProposedListing: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_PROPOSED_LISTING;
				var object = {
					ID: "",
					PRODUCT_ID: "",
					RETAILER_NAME: "",
					SELLING_PRICE: "",
					START_DATE: null
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteProposedListingTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_PROPOSED_LISTING;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			// End of Marketing
			onAddVariant: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST;
				var object = {
					ID: 20698,
					S_NO: parseInt(this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST.length) + 1,
					PRODUCT_ID: "",
					FULL_VARIANT_DESC: "",
					SHORT_VARIANT_DESC: "",
					VARIANT_STATUS: "",
					VARIANT_DELETION_REMARKS: "",
					VARIANT_DELETION_STATUS: 0,
					VARIANT_COMMENTS: "",
					FPOL_VARIANT_DESC: "",
					STORE_COUNT: 0,
					CLASS_CODE: "",
					SUB_CLASS_CODE: "",
					EFF_DATE_STOCK_TO_STORE: null,
					CARTON_PER_OUTER_CASE: "",
					OUTER_CASE_DIMENSION_LENGTH: "0",
					OUTER_CASE_DIMENSION_WIDTH: "0",
					OUTER_CASE_DIMENSION_HIEGHT: "0",
					PACK_SIZE: "",
					PACK_SIZE_UOM: "",
					COUNTRY_CODE: "",
					COUNTRY_NAME: "",
					VARIANT_UOM_LIST: [],
					VARIANRT_PRICING_LIST: []
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteVariant: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onUpdateVariantTableFinished: function (oEvent) {
				var iToatl = oEvent.getParameter("total");
				if (iToatl === 0) {
					this.getView().getModel("NPIView").setProperty("/bVariantLength", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bVariantLength", true);
				}
				if (this.Path === undefined) {
					this.Path = "/PRODUCT_VARIANT_LIST/0";
					this.iPath = this.Path.split("/")[2];
				}
				this._fnAllTableItems("productmaster.view.subView.NPI.ProductUOM", "tbProductUOM", "/VARIANT_UOM_LIST");
				this._fnAllTableItems("productmaster.view.subView.NPI.ProductPricing", "tbVariantPricing", "/VARIANRT_PRICING_LIST");
			},
			onDisplayvariant: function (oEvent) {
				this.Path = oEvent.getSource().getBindingContext("oNPI").getPath();
				this.iPath = this.Path.split("/")[2];
				if (parseInt(this.iPath) !== 0) {
					this._AddProductUOM();
					this._onProductVariant();
				}
				this._fnAllTableItems("productmaster.view.subView.NPI.ProductUOM", "tbProductUOM", "/VARIANT_UOM_LIST");
				this._fnAllTableItems("productmaster.view.subView.NPI.ProductPricing", "tbVariantPricing", "/VARIANRT_PRICING_LIST");
			},
			_fnAllTableItems: function (sFragmentName, sTable, sExtensionPath) {
				var that = this;
				sap.ui.core.Fragment.load({
					name: sFragmentName,
					controller: that
				}).then(function (oDialog) {
					var oBindingInfo = {
						path: "oNPI>" + this.Path + sExtensionPath,
						template: oDialog
					};
					that.getView().byId(sTable).bindAggregation("items", oBindingInfo);
				}.bind(that));

			},
			_AddProductUOM: function () {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: false,
					Volume: ""
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			_onProductVariant: function () {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: false
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onProductUOM: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: true,
					Volume: ""
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			onProductPricing: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: true
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeletevariantUOM: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[4]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteProductPricing: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[4]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},

			// Package Size Unit ValueHelp block
			OnPackageSizeUnitF4: function (oEvent) {
				var that = this;
				that.oPackageInput = oEvent.getSource();
				if (!that._oPacKageSizeUnitF4) {
					that._PacKageSizeUnitDialog = sap.ui.core.Fragment.load({
						id: that.createId("_PacKageSizeUnitF4"),
						name: "productmaster.fragments.PackageSizeUnit",
						controller: that
					}).then(function (oDialog) {
						that._oPacKageSizeUnitF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oPacKageSizeUnitF4);
					});
				}
				that._PacKageSizeUnitDialog.then(function (oDialog) {
					var oData = that._oPacKageSizeUnitF4.getModel("oGenericModel").getData().PACK_SIZE_UNIT;
					var sTokens = that.getView().byId("ipPackSizeUnit").getValue();
					for (var key in oData) {
						if (oData[key].UOM_DESC === sTokens) {
							oData[key]["SELECTED"] = true;
							break;
						} else {
							oData[key]["SELECTED"] = false;
						}

					}
					that._oPacKageSizeUnitF4.getModel("oGenericModel").updateBindings(true);
					that._oPacKageSizeUnitF4.open();
				}.bind(that));

			},
			_getFragmentText: function (FragId, id) {
				return sap.ui.core.Fragment.byId(this.createId(FragId), id);
			},
			onPackageSizeUnitSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("UOM_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_PacKageSizeUnitF4", "idPacKageSizeUnitDialogF4").getBinding("items").filter([oFilter]);
			},
			onPackageSizeUnitDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oPackageInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oPacKageSizeUnitF4) {
					that._oPacKageSizeUnitF4.destroy();
					that._oPacKageSizeUnitF4 = undefined;
				}
			},
			// Package Size Unit Valuehelp End block
			// Product Format Starting Block
			OnProductFormatF4: function (oEvent) {
				var that = this;
				if (!that._oProductFormatF4) {
					that._ProductFormatDialog = sap.ui.core.Fragment.load({
						id: that.createId("_ProductFormatF4"),
						name: "productmaster.fragments.ProductFormat",
						controller: that
					}).then(function (oDialog) {
						that._oProductFormatF4 = oDialog;
						oDialog.setMultiSelect(true);
						that.getView().addDependent(that._oProductFormatF4);
					});
				}
				that._ProductFormatDialog.then(function (oDialog) {
					var oData = that._oProductFormatF4.getModel("oGenericModel").getData().FORMAT;
					var aTokens = that.getView().byId("ipProductFormat").getTokens();
					for (var key in oData) {
						for (var key2 in aTokens) {
							if (oData[key].LABEL_CODE === aTokens[key2].getText()) {
								oData[key]["SELECTED"] = true;
								break;
							} else {
								oData[key]["SELECTED"] = false;
							}
						}
					}
					that._oProductFormatF4.getModel("oGenericModel").updateBindings(true);
					that._oProductFormatF4.open();
				}.bind(that));

			},
			onProductFormatSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("LABEL_CODE", FilterOperator.Contains, sValue);
				this._getFragmentText("_ProductFormatF4", "idProductFormatDialogF4").getBinding("items").filter([oFilter]);
			},
			onProductFormatDialogClose: function (oEvent) {
				var that = this;
				var sVal = this.getView().getModel("oNPI").getData().PRODUCT_DATA.PRODUCT_FORMAT;
				var aFinalArray = [];
				var sFinaltext = "";
				var aSelectedItems = oEvent.getParameter("selectedItems"),
					oMultiInput = this.getView().byId("ipProductFormat");
				if (aSelectedItems && aSelectedItems.length > 0) {
					aSelectedItems.forEach(function (oItem) {
						oMultiInput.addToken(new sap.m.Token({
							text: oItem.getTitle()
						}));
						aFinalArray.push(oItem.getTitle());
					});
					sFinaltext = aFinalArray.join();
					sVal = sFinaltext;
					this.getView().getModel("oNPI").updateBindings(true);
				}
				if (aSelectedItems.length === 0) {
					oMultiInput.setTokens([]);
				}
				if (that._oProductFormatF4) {
					that._oProductFormatF4.destroy();
					that._oProductFormatF4 = undefined;
				}
			},
			// Product Formar Ending Block
			// Main Key ValueHelp block
			OnMainKeyF4: function (oEvent) {
				var that = this;
				that.oMainKey = oEvent.getSource();
				if (!that._oMainKeyF4) {
					that._MainKeyDialog = sap.ui.core.Fragment.load({
						id: that.createId("_MainKeyF4"),
						name: "productmaster.fragments.MainKey",
						controller: that
					}).then(function (oDialog) {
						that._oMainKeyF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oMainKeyF4);
					});
				}
				that._MainKeyDialog.then(function (oDialog) {
					that._oMainKeyF4.open();
				}.bind(that));

			},
			onMainKeySearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("MCH_MAIN_KEY_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_MainKeyF4", "idMainKeyDialogF4").getBinding("items").filter([oFilter]);
			},
			onMainKeyDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oMainKey.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oMainKeyF4) {
					that._oMainKeyF4.destroy();
					that._oMainKeyF4 = undefined;
				}
			},
			// Main Key Valuehelp End block
			// DepartMent Code ValueHelp block
			OnDepartMentCodeF4: function (oEvent) {
				var that = this;
				that.oDepartment = oEvent.getSource();
				if (!that._oDepartMentCodeF4) {
					that._DepartMentDialog = sap.ui.core.Fragment.load({
						id: that.createId("_DepartMentCodeF4"),
						name: "productmaster.fragments.DepartMentCode",
						controller: that
					}).then(function (oDialog) {
						that._oDepartMentCodeF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oDepartMentCodeF4);
					});
				}
				that._DepartMentDialog.then(function (oDialog) {
					that._oDepartMentCodeF4.open();
				}.bind(that));

			},
			onDepartMentCodeSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("MCH_MAIN_KEY_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_DepartMentCodeF4", "idDepartMentCodeDialogF4").getBinding("items").filter([oFilter]);
			},
			onDepartMentCodeDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oDepartment.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oDepartMentCodeF4) {
					that._oDepartMentCodeF4.destroy();
					that._oDepartMentCodeF4 = undefined;
				}
			},
			// DepartMent Code Valuehelp End block
			// Class Node ValueHelp block
			OnClassNodeF4: function (oEvent) {
				var that = this;
				that.oClassCode = oEvent.getSource();
				if (!that._oClassCodeF4) {
					that._ClassCodeDialog = sap.ui.core.Fragment.load({
						id: that.createId("_ClassCodeF4"),
						name: "productmaster.fragments.ClassCode",
						controller: that
					}).then(function (oDialog) {
						that._oClassCodeF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oClassCodeF4);
					});
				}
				that._ClassCodeDialog.then(function (oDialog) {
					that._oClassCodeF4.open();
				}.bind(that));

			},
			onClassCodeSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("MCH_MAIN_KEY_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_ClassCodeF4", "idClassCodeDialogF4").getBinding("items").filter([oFilter]);
			},
			onClassCodeDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oClassCode.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oClassCodeF4) {
					that._oClassCodeF4.destroy();
					that._oClassCodeF4 = undefined;
				}
			},
			// Class Code Valuehelp End block

			// Competing Product Code ValueHelp block
			OnCompetingProductCodeF4: function (oEvent) {
				var that = this;
				that.oInput = oEvent.getSource();
				if (!that._oCompetingProductCodeF4) {
					that._CompetingProductCodeDialog = sap.ui.core.Fragment.load({
						id: that.createId("_CompetingProductCodeF4"),
						name: "productmaster.fragments.CompetingProductCode",
						controller: that
					}).then(function (oDialog) {
						that._oCompetingProductCodeF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oCompetingProductCodeF4);
					});
				}
				that._CompetingProductCodeDialog.then(function (oDialog) {
					that._oCompetingProductCodeF4.open();
				}.bind(that));

			},
			onCompetingProductCodeSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("PRODUCT_SHORT_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_CompetingProductCodeF4", "idCompetingProductCodeDialogF4").getBinding("items").filter([oFilter]);
			},
			onCompetingProductCodeDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oCompetingProductCodeF4) {
					that._oCompetingProductCodeF4.destroy();
					that._oCompetingProductCodeF4 = undefined;
				}
			},
			//Competing Product Code Valuehelp End block
			// Brand Code ValueHelp block
			OnBrandCodeF4: function (oEvent) {
				var that = this;
				that.oInput = oEvent.getSource();
				if (!that._oBrandCodeF4) {
					that._BrandCodeDialog = sap.ui.core.Fragment.load({
						id: that.createId("_BrandCodeF4"),
						name: "productmaster.fragments.BrandCode",
						controller: that
					}).then(function (oDialog) {
						that._oBrandCodeF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oBrandCodeF4);
					});
				}
				that._BrandCodeDialog.then(function (oDialog) {
					that._oBrandCodeF4.open();
				}.bind(that));

			},
			onBrandCodeSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("BRAND_GROUP_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_BrandCodeF4", "idBrandCodeDialogF4").getBinding("items").filter([oFilter]);
			},
			onBrandCodeDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oBrandCodeF4) {
					that._oBrandCodeF4.destroy();
					that._oBrandCodeF4 = undefined;
				}
			},
			//Brand Product Code Valuehelp End block
			// Weight Unit ValueHelp block
			OnWeightUnitF4: function (oEvent) {
				var that = this;
				that.oInput = oEvent.getSource();
				if (!that._oWeightUnitF4) {
					that._WeightunitDialog = sap.ui.core.Fragment.load({
						id: that.createId("_WeightUnitF4"),
						name: "productmaster.fragments.WeightUnit",
						controller: that
					}).then(function (oDialog) {
						that._oWeightUnitF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oWeightUnitF4);
					});
				}
				that._WeightunitDialog.then(function (oDialog) {
					that._oWeightUnitF4.open();
				}.bind(that));

			},
			onWeightUnitSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("CODE_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_WeightUnitF4", "idWeightUnitDialogF4").getBinding("items").filter([oFilter]);
			},
			onWeightUnitDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oWeightUnitF4) {
					that._oWeightUnitF4.destroy();
					that._oWeightUnitF4 = undefined;
				}
			},
			//Weight Unit  Valuehelp End block
			// Country ValueHelp block
			OnCountryF4: function (oEvent) {
				var that = this;
				that.oInput = oEvent.getSource();
				if (!that._oCountryF4) {
					that._CountryDialog = sap.ui.core.Fragment.load({
						id: that.createId("_CountryF4"),
						name: "productmaster.fragments.Country",
						controller: that
					}).then(function (oDialog) {
						that._oCountryF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oCountryF4);
					});
				}
				that._CountryDialog.then(function (oDialog) {
					that._oCountryF4.open();
				}.bind(that));

			},
			onCountrySearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("COUNTRY_NAME", FilterOperator.Contains, sValue);
				this._getFragmentText("_CountryF4", "idCountryDialogF4").getBinding("items").filter([oFilter]);
			},
			onCountryDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oCountryF4) {
					that._oCountryF4.destroy();
					that._oCountryF4 = undefined;
				}
			},
			//Country  Valuehelp End block
			// Currency ValueHelp block
			OnCurrencyF4: function (oEvent) {
				var that = this;
				that.oInput = oEvent.getSource();
				if (!that._oCurrencyF4) {
					that._CurrencyDialog = sap.ui.core.Fragment.load({
						id: that.createId("_CurrencyF4"),
						name: "productmaster.fragments.Currency",
						controller: that
					}).then(function (oDialog) {
						that._oCurrencyF4 = oDialog;
						oDialog.setMultiSelect(false);
						that.getView().addDependent(that._oCurrencyF4);
					});
				}
				that._CurrencyDialog.then(function (oDialog) {
					that._oCurrencyF4.open();
				}.bind(that));

			},
			onCurrencySearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("CURRENCY_DESC", FilterOperator.Contains, sValue);
				this._getFragmentText("_CurrencyF4", "idCurrencyDialogF4").getBinding("items").filter([oFilter]);
			},
			onCurrencyDialogClose: function (oEvent) {
				var that = this;
				if (oEvent.getParameter("selectedItem") !== undefined) {
					that.oInput.setValue(oEvent.getParameter("selectedItem").getTitle());
				}
				if (that._oCurrencyF4) {
					that._oCurrencyF4.destroy();
					that._oCurrencyF4 = undefined;
				}
			},
			//Currency  Valuehelp End block
			onCancel: function (oEvent) {
				history.go(-1);
			},
			onSave: function (oEvent) {
				MessageBox.success("Saved Successfully!");
				console.log(this.getView().getModel("oNPI").getData());
			},
			onSubmit: function (oEvent) {
				MessageBox.success("Submitted Successfully!");
				console.log(this.getView().getModel("oNPI").getData());
			},
		});

	});