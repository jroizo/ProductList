sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("demoFioriProductList.controller.Products", {
		onInit: function(){
			
		},
		onfilterProducts: function(oEvent){
			var prodFilter = [];
			var sQuery = oEvent.getParameter("query");
			
			if (sQuery){
				prodFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery ));
			}
			
			var oList = this.byId("productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(prodFilter);
		}

	});
});