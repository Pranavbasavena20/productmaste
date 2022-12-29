sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
],
	/**
	 * provide app-view type models (as in the first "V" in MVVC)
	 * 
	 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
	 * @param {typeof sap.ui.Device} Device
	 * 
	 * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
	 */
	function (JSONModel, Device) {
		"use strict";

		return {
			createDeviceModel: function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode("OneWay");
				return oModel;
			},
			fnGenericModel: function () {
				var oGenericModel = new JSONModel({
					"STATUS": [{
						"PRODUCT_STATUS": "1",
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_STATUS": "2",
						"PRODUCT_STATUS_DESC": "SUBMITTED"
					}],
					"Form ID": [
						// 	{
						// 	"FORM_ID": 0
						// }, {
						// 	"FORM_ID": 1
						// }

					],
					"SUPPLIER CODE": [{
						"VENDOR_CODE": 1,
						"VENDOR_NAME": 'KARSTEL'
					}, {
						"VENDOR_CODE": 2,
						"VENDOR_NAME": 'NESTLE'
					}],
					"MONTH": [{
						"MONTH_ID": 0,
						"MONTH_NAME": "JAN"
					}, {
						"MONTH_ID": 1,
						"MONTH_NAME": "FEB"
					}, {
						"MONTH_ID": 3,
						"MONTH_NAME": "MAR"
					}, {
						"MONTH_ID": 4,
						"MONTH_NAME": "APR"
					}, {
						"MONTH_ID": 5,
						"MONTH_NAME": "MAY"
					}],
					"CURRENCY": [{
						"RETAILER_ID": 1,
						"CURRENCY_CODE": "INR",
						"CURRENCY_NAME": "Indian Rupee",
						"CURRENCY_DESC": "Indian Currency",
						"ACTIVE": true
					}, {
						"RETAILER_ID": 1,
						"CURRENCY_CODE": "SGD",
						"CURRENCY_NAME": "Singapore Dollar",
						"CURRENCY_DESC": "Singapore Dollar Currency",
						"ACTIVE": true
					}],
					"MEDIA_TYPE": [{
						"OBJECT_ID": 40,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "MEDIA_TYPE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "RAD",
						"CODE_DESC": "Radio",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 41,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "MEDIA_TYPE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "TV",
						"CODE_DESC": "Television",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 42,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "MEDIA_TYPE",
						"OBJECT_CODE": 3,
						"PH_TYPE": "",
						"LABEL_CODE": "NWP",
						"CODE_DESC": "News Paper",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"PRODUCT_CATEGORY": [{
						"OBJECT_ID": 1,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_CATG",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "Single Product",
						"CODE_DESC": "Single Product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 2,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_CATG",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Product With Variant",
						"CODE_DESC": "Product With Variant",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"WEIGHT_UNIT": [{
						"OBJECT_ID": 30,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "UOMWEIGHT_UNIT",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "KG",
						"CODE_DESC": "Kilogram",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 20,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "UOMWEIGHT_UNIT",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "G",
						"CODE_DESC": "Gram",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 21,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "UOMWEIGHT_UNIT",
						"OBJECT_CODE": 3,
						"PH_TYPE": "",
						"LABEL_CODE": "PD",
						"CODE_DESC": "Pounds",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"PRODUCT_STYLE": [{
						"OBJECT_ID": 22,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRODUCT_STYLE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "Style 1",
						"CODE_DESC": "Style desc 1",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 23,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRODUCT_STYLE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Style 2",
						"CODE_DESC": "Style desc 2",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 24,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRODUCT_STYLE",
						"OBJECT_CODE": 3,
						"PH_TYPE": "",
						"LABEL_CODE": "Style 3",
						"CODE_DESC": "Style desc 3",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"COMPETING_PRODUCT": [{
						"PRODUCT_ID": 0,
						"PRODUCT_SHORT_DESC": "Product Desc 0",
						"PACK_SIZE": "11 G",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 1,
						"PRODUCT_SHORT_DESC": "Product Desc 1",
						"PACK_SIZE": "1 KG",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}, {
						"PRODUCT_ID": 2,
						"PRODUCT_SHORT_DESC": "Product Desc 2",
						"PACK_SIZE": "22 L",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 3,
						"PRODUCT_SHORT_DESC": "Product Desc 3",
						"PACK_SIZE": "123 IN",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}, {
						"PRODUCT_ID": 4,
						"PRODUCT_SHORT_DESC": "Product Desc 4",
						"PACK_SIZE": "4 L",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 5,
						"PRODUCT_SHORT_DESC": "Product Desc 5",
						"PACK_SIZE": "5 KG",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 6,
						"PRODUCT_SHORT_DESC": "Product Desc 6",
						"PACK_SIZE": "600 ML",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 7,
						"PRODUCT_SHORT_DESC": "Product Desc 7",
						"PACK_SIZE": " 7",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}, {
						"PRODUCT_ID": 8,
						"PRODUCT_SHORT_DESC": "Product Desc 8",
						"PACK_SIZE": " 8",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 9,
						"PRODUCT_SHORT_DESC": "Product Desc 9",
						"PACK_SIZE": " 9",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 10,
						"PRODUCT_SHORT_DESC": "Product Desc 10",
						"PACK_SIZE": " 10",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 11,
						"PRODUCT_SHORT_DESC": "Product Desc 11",
						"PACK_SIZE": " 11",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 12,
						"PRODUCT_SHORT_DESC": "Product Desc 12",
						"PACK_SIZE": " 12",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 13,
						"PRODUCT_SHORT_DESC": "Product Desc 13",
						"PACK_SIZE": " 13",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 14,
						"PRODUCT_SHORT_DESC": "Product Desc 14",
						"PACK_SIZE": " 14",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}, {
						"PRODUCT_ID": 15,
						"PRODUCT_SHORT_DESC": "Product Desc 15",
						"PACK_SIZE": " 15",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 16,
						"PRODUCT_SHORT_DESC": "Product Desc 16",
						"PACK_SIZE": " 16",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 17,
						"PRODUCT_SHORT_DESC": "Product Desc 17",
						"PACK_SIZE": " 17",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 18,
						"PRODUCT_SHORT_DESC": "Product Desc 18",
						"PACK_SIZE": " 18",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}, {
						"PRODUCT_ID": 19,
						"PRODUCT_SHORT_DESC": "Product Desc 19",
						"PACK_SIZE": " 19",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 20,
						"PRODUCT_SHORT_DESC": "Product Desc 20",
						"PACK_SIZE": " 20",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 21,
						"PRODUCT_SHORT_DESC": "Product Desc 21",
						"PACK_SIZE": " 21",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 1,
						"PRODUCT_STATUS_DESC": "DRAFT"
					}, {
						"PRODUCT_ID": 22,
						"PRODUCT_SHORT_DESC": "Product Desc 22",
						"PACK_SIZE": " 22",
						"COUNTRY_OF_ORIGIN": "USA",
						"BARCODE": 454345345646,
						"BRAND_CODE": "Nestle",
						"PRODUCT_STATUS": 2,
						"PRODUCT_STATUS_DESC": "SUBMIT"
					}],
					"PRODUCT_LISTING": [{
						"OBJECT_ID": 3,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_LISTING",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "New",
						"CODE_DESC": "New Listing",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 4,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_CATG",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Replacement",
						"CODE_DESC": "Replacement of Existing product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"countryCode": [{
						"COUNTRY_CODE": "+1",
						"COUNTRY_NAME": "USA"
					}, {
						"COUNTRY_CODE": "+60",
						"COUNTRY_NAME": "Malaysia"
					}, {
						"COUNTRY_CODE": "+62",
						"COUNTRY_NAME": "Indonesia"
					}, {
						"COUNTRY_CODE": "+63",
						"COUNTRY_NAME": "Philipines"
					}, {
						"COUNTRY_CODE": "+65",
						"COUNTRY_NAME": "Singapore"
					}, {
						"COUNTRY_CODE": "+66",
						"COUNTRY_NAME": "Thailand"
					}, {
						"COUNTRY_CODE": "+84",
						"COUNTRY_NAME": "Vietnam"
					}, {
						"COUNTRY_CODE": "+91",
						"COUNTRY_NAME": "India"
					}],
					"PACK_SIZE_UNIT": [{
						"ID": 1,
						"RETAILER_ID": 1,
						"SELECTED": false,
						"UOM_CODE": "L",
						"UOM_DESC": "Litre"
					}, {
						"ID": 2,
						"RETAILER_ID": 1,
						"SELECTED": false,
						"UOM_CODE": "G",
						"UOM_DESC": "Gram"
					}, {
						"ID": 3,
						"RETAILER_ID": 1,
						"SELECTED": false,
						"UOM_CODE": "KG",
						"UOM_DESC": "Kilogram"
					}, {
						"ID": 4,
						"RETAILER_ID": 1,
						"SELECTED": false,
						"UOM_CODE": "OU",
						"UOM_DESC": "Ounce"
					}, {
						"ID": 5,
						"RETAILER_ID": 1,
						"SELECTED": false,
						"UOM_CODE": "ML",
						"UOM_DESC": "Millilitre"
					}],
					"BRAND_GROUP": [{
						"RETAILER_ID": 1,
						"BRAND_GROUP_CODE": 101,
						"BRAND_GROUP_LABEL_CODE": "TATA",
						"BRAND_GROUP_DESC": "Tata"
					}, {
						"RETAILER_ID": 1,
						"BRAND_GROUP_CODE": 102,
						"BRAND_GROUP_LABEL_CODE": "White Label",
						"BRAND_GROUP_DESC": "White Label"
					}],
					"FORMAT": [{
						"OBJECT_ID": 25,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "FORMAT",
						"OBJECT_CODE": 1,
						"SELECTED": false,
						"PH_TYPE": "",
						"LABEL_CODE": "Format 1",
						"CODE_DESC": "Format desc 1",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 26,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "FORMAT",
						"OBJECT_CODE": 2,
						"SELECTED": false,
						"PH_TYPE": "",
						"LABEL_CODE": "Format 2",
						"CODE_DESC": "Format desc 2",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 27,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "FORMAT",
						"OBJECT_CODE": 3,
						"SELECTED": false,
						"PH_TYPE": "",
						"LABEL_CODE": "Format 3",
						"CODE_DESC": "Format desc 3",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"BRAND_CODE": [{
						"RETAILER_ID": 1,
						"BRAND_GROUP_CODE": 101,
						"BRAND_CODE": 1,
						"BRAND_LABEL_CODE": "TATA Premium",
						"BRAND_DESC": "Tata"
					}, {
						"RETAILER_ID": 1,
						"BRAND_GROUP_CODE": 101,
						"BRAND_CODE": 2,
						"BRAND_LABEL_CODE": "TATA Deluxe",
						"BRAND_DESC": "Tata Sub Brands"
					}],
					"SEASON_YEAR": [{
						"OBJECT_ID": 5,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "SEASON_YEAR",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": 2021,
						"CODE_DESC": 2021,
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 6,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "SEASON_YEAR",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": 2022,
						"CODE_DESC": 2022,
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"SEASON_CODE": [{
						"OBJECT_ID": 6,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "SEASON_CODE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "Season 1",
						"CODE_DESC": "First Season",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 7,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "SEASON_CODE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Season 2",
						"CODE_DESC": "Second Season",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"PHASE_CODE": [{
						"OBJECT_ID": 8,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PHASE_CODE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": 1,
						"CODE_DESC": "First Phase",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 9,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PHASE_CODE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": 2,
						"CODE_DESC": "Second Phase",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"YESNO": [{
						"OBJECT_ID": 10,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "YES/NO",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": 1,
						"CODE_DESC": "Yes",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 11,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "YES/NO",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": 0,
						"CODE_DESC": "No",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"MCH_MAIN_KEY": [{
						"RETAILER_ID": 1,
						"MCH_MAIN_KEY_ID": 1,
						"MCH_MAIN_KEY_LABEL_CODE": "FOOD",
						"MCH_MAIN_KEY_DESC": "Food Level 1"
					}],
					"MCH_DEPARTMENT": [{
						"RETAILER_ID": 1,
						"MCH_MAIN_KEY_ID": 1,
						"MCH_DEPT_KEY_ID": 1,
						"MCH_DEPT_LABEL_CODE": "FMCG",
						"MCH_MAIN_KEY_DESC": "FMCG"
					}],
					"MCH_CLASS": [{
						"RETAILER_ID": 1,
						"MCH_CLASS_KEY_ID": 1,
						"MCH_DEPT_KEY_ID": 1,
						"MCH_CLASS_LABEL_CODE": "Beverages",
						"MCH_MAIN_KEY_DESC": "Beverages"
					}, {
						"RETAILER_ID": 1,
						"MCH_CLASS_KEY_ID": 2,
						"MCH_DEPT_KEY_ID": 1,
						"MCH_CLASS_LABEL_CODE": "Grocery",
						"MCH_MAIN_KEY_DESC": "Grocery"
					}],
					"MCH_SUB_CATEGORY_1": [{
						"RETAILER_ID": 1,
						"MCH_CLASS_KEY_ID": 1,
						"MCH_SUB_CATG_1_ID": 1,
						"MCH_CLASS_LABEL_CODE": "Carbonated Soft Drink",
						"MCH_MAIN_KEY_DESC": "Carbonated Soft Drink"
					}, {
						"RETAILER_ID": 1,
						"MCH_CLASS_KEY_ID": 2,
						"MCH_SUB_CATG_1_ID": 2,
						"MCH_CLASS_LABEL_CODE": "Oats",
						"MCH_MAIN_KEY_DESC": "Oats"
					}],
					"MCH_SUB_CATEGORY_2": [{
						"RETAILER_ID": 1,
						"MCH_SUB_CATG_1_ID": 1,
						"MCH_SUB_CATG_2_ID": 1,
						"MCH_CLASS_LABEL_CODE": "Can",
						"MCH_MAIN_KEY_DESC": "Can"
					}, {
						"RETAILER_ID": 1,
						"MCH_SUB_CATG_1_ID": 1,
						"MCH_SUB_CATG_2_ID": 2,
						"MCH_CLASS_LABEL_CODE": "Ready to Eat",
						"MCH_MAIN_KEY_DESC": "Ready to Eat"
					}],
					"PRODUCT_SIZE": [{
						"OBJECT_ID": 12,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_SIZE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "XS",
						"CODE_DESC": "Extra Small",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 13,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_SIZE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "S",
						"CODE_DESC": "Small",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 14,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_SIZE",
						"OBJECT_CODE": 3,
						"PH_TYPE": "",
						"LABEL_CODE": "M",
						"CODE_DESC": "Medium",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 15,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PROD_SIZE",
						"OBJECT_CODE": 4,
						"PH_TYPE": "",
						"LABEL_CODE": "L",
						"CODE_DESC": "Large",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"SALES_ORG": [{
						"RETAILER_ID": 1,
						"SALES_ORG_ID": 'SAORG_1',
						"SALES_ORG_DESC": "Org Desc 1"
					}],
					"DC": [{
						"RETAILER_ID": 1,
						"DC_ID": 1,
						"SALES_ORG_ID": "Org 1"
					}],
					"PRICE_TYPE": [{
						"OBJECT_ID": 16,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRICE_TYPE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "Normal",
						"CODE_DESC": "Actual Price Type",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 17,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRICE_TYPE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Introductory",
						"CODE_DESC": "Initial Offer for Product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					"UOM": [{
						"OBJECT_ID": 18,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "UOM_TYPE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "EA",
						"CODE_DESC": "Each",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 19,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "UOM_TYPE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "CAR",
						"CODE_DESC": "Carton",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}],
					// "COMPETING_PRODUCT": [{
					// 	"RETAILER_ID": 1,
					// 	"PRODUCT_ID": '101',
					// 	"PRODUCT_SHORT_DESC": "Nestle Eclairs"
					// }, {
					// 	"RETAILER_ID": 1,
					// 	"PRODUCT_ID": '5002',
					// 	"PRODUCT_SHORT_DESC": "Meiji Milk"
					// }],
					"ATTACHMENT_TYPE": [{
						"OBJECT_ID": 19,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRDATTACH_TYPE",
						"OBJECT_CODE": 1,
						"PH_TYPE": "",
						"LABEL_CODE": "Product Image",
						"CODE_DESC": "Image for Product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 20,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRDATTACH_TYPE",
						"OBJECT_CODE": 2,
						"PH_TYPE": "",
						"LABEL_CODE": "Product Video",
						"CODE_DESC": "Video for Product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}, {
						"OBJECT_ID": 21,
						"RETAILER_ID": 1,
						"OBJECT_TYPE": "PRDATTACH_TYPE",
						"OBJECT_CODE": 3,
						"PH_TYPE": "",
						"LABEL_CODE": "Product Documents",
						"CODE_DESC": "Documents for Product",
						"VALID_FROM": "2022-11-12",
						"VALID_TO": "9999-12-31"
					}]

				});
				return oGenericModel;

			},
			fnNPI: function () {
				var oNPI = new JSONModel({
					ID: "",
					PRODUCT_ID: "",
					VENDOR_MASTER_ID: "",
					VENDOR_CODE: "",
					PART_NUMBER: "",
					PARENT_FLAG: "",
					RETURN_POLICY: "",
					RETURN_POLICY_DESC: "",
					AVG_LEAD_TIME: "",
					SEL_DEPT_LEVEL1_CODE: "",
					SEL_DEPT_LEVEL1_DESC: "",
					SEL_DEPT_LEVEL2_CODE: "",
					SEL_DEPT_LEVEL2_DESC: "",
					IS_NEW_VENDOR: "",
					IS_VENDOR_APPROVED: "",
					URGENT: "",
					MARKET_EXP_AMOUNT: "",
					MARKET_START_DATE: "",
					MARKET_END_DATE: "",
					PRODUCT_VARIANT_LIST: [{
						ID: 20698,
						S_NO: 1,
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
						COUNTRY_CODE_DESC: "",
						COUNTRY_NAME: "",
						VARIANT_UOM_LIST: [{
							ID: "1",
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
							WT_UNIT_DESC: "",
							ADD_SALES_UNIT: "",
							VALID_FROM: "",
							VALID_TO: "",
							Button: false,
							Volume: ""
						}],
						VARIANRT_PRICING_LIST: [{
							ID: "1",
							PRODUCT_ID: "",
							VENDOR_ID: "",
							VARIANT_ID: "",
							SALES_ORG: "",
							SALES_ORG_DESC: "",
							DIST_CHANNEL: "",
							DIST_CHANNEL_DESC: "",
							PRICE_TYPE: "",
							PRICE_TYPE_DESC: "",
							UNIT_COST_PRICE: "",
							COST_PRICE: "",
							COST_PRICE_MISC: "",
							MISC_UNIT_CP: "",
							CP_CURRENCY: "",
							CP_CURRENCY_DESC: "",
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
						}]
					}],
					PRODUCT_DATA: {
						PRODUCT_TREND: "",
						REQUEST_ID: "",
						PRODUCT_ORIGINALITY: "",
						PRODUCT_ID: "",
						PRODUCT_CODE: "",
						PRODUCT_SHORT_DESC: "",
						PRODUCT_FULL_DESC: "",
						MCH_MAIN_KEY: "",
						MCH_MAIN_KEY_DESC: "",
						DEPARTMENT_CODE: "",
						DEPARTMENT_CODE_DESC: "",
						PACK_SIZE_UNIT: "",
						PACK_SIZE_UNIT_DESC: "",
						CLASS_CODE: "",
						CLASS_CODE_DESC: "",
						SUB_CLASS_CODE: "",
						SUB_CLASS_CODE_DESC: "",
						PRODUCT_TYPE: "",
						PRODUCT_TYPE_DESC: "",
						PRODUCT_STYLE: "",
						PRODUCT_STYLE_DESC: "",
						PRODUCT_COLOR: "",
						PRODUCT_SIZE: "",
						PRODUCT_SIZE_DESC: "",
						BRAND_GROUP: "",
						BRAND_GROUP_DESC: "",
						BRAND_CODE: "",
						BRAND_DESC: "",
						SEASON_YEAR: "",
						SEASON_YEAR_DESC: "",
						PRODUCT_LISTING: "",
						PRODUCT_LISTING_DESC: "",
						PRODUCT_STATUS: "",
						PRODUCT_STATUS_DESC: "",
						PRODUCT_FORMAT: "",
						PRODUCT_FORMAT_DESC: "",
						SEASON_CODE: "",
						SEASON_CODE_DESC: "",
						PHASE_CODE: "",
						PHASE_CODE_DESC: "",
						PRODUCT_CATEGORY: "",
						PRODUCT_CATEGORY_DESC: "",
						MFR_CODE: "",
						MFR_DESC: "",
						PRIVATE_FLAG: "",
						MERCHANDISE_FLAG: "",
						TAX_CODE: "",
						COUNTRY_OF_ORIGIN: "",
						COUNTRY_OF_ORIGIN_DESC: "",
						SHELF_LIFE: "",
						BUYER_LEVEL1_CODE: "",
						BUYER_LEVEL2_CODE: "",
						BUYER_LEVEL3_CODE: "",
						BUYER_LEVEL4_CODE: "",
						BUYER_LEVEL5_CODE: "",
						BUYER_LEVEL6_CODE: "",
						IS_VIA_MASSUPLOAD: ""
					},
					PRODUCT_COMPARISION: [],
					PRODUCT_UOM_LIST: [{
						ID: "1",
						PRODUCT_ID: "",
						VARIANT_ID: "",
						UOM: "",
						UOM_DESC: "",
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
						WT_UNIT_DESC: "",
						ADD_SALES_UNIT: "",
						VALID_FROM: "",
						VALID_TO: "",
						Button: false,
						Volume: ""
					}],
					PRODUCT_PRICING_LIST: [{
						ID: "1",
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
						CP_CURRENCY_DESC: "",
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
					}],
					PRODUCT_MARKETING_LIST: [

					],
					PRODUCT_PROPOSED_LISTING: [

					],
					PRODUCT_JUSTIFICATION: {
						ID: "",
						PRODUCT_ID: "",
						JUSTIFICATION: ""
					},
					PRODUCT_ATTACHMENT: [

					],
					PRODUCT_ATTACHMENT_FORM: {
						ID: "",
						PRODUCT_ID: "",
						VENDOR_ID: "",
						VARIANT_ID: "",
						ATTACHMENT_TYPE: "",
						ATTACHMENT_TYPE_DESC: "",
						DISPLAY_DOCUMENT_NAME: "",
						DOCUMENT_NAME: "",
						DOCUMENT_URL: "",
						DOC_EXPIRY_DATE: "",
						CREATED_BY: "",
						CREATED_ON: "",
						SOURCE_PATH: ""
					},
					PRODUCT_ATTRIBUTE_LIST: [

					],
					COMMENT_LIST: {
						ID: "",
						PRODUCT_ID: "",
						VENDOR_ID: "",
						COMMENT: "",
						USER_ID: "",
						USER_NAME: "",
						USER_ROLE_TYPE: "",
						COMMENT_DATE: "",
						COMMENT_TYPE: ""
					},
					PRODUCT_FORECAST: {
						FORECAST_ATTIBUTES: [

						],
						FORECAST_MONTHS: [

						],
						ID: "",
						PRODUCT_ID: "",
						COMPETING_PRODMSTRSEQID_1: "",
						COMPETING_PRODMSTRSEQID_1_DESC: "",
						COMPETING_PRODMSTRQID_2: "",
						COMPETING_PRODMSTRQID_2_DESC: "",
						COMPETING_PRODMSTRQID_3: "",
						COMPETING_PRODMSTRQID_3_DESC: ""
					}
				});
				return oNPI;

			},
			fnTableData: function () {
				var oTableData = new JSONModel({
					ProductData: [

					],
					Path: ""
				});
				return oTableData;

			},
		};
	});