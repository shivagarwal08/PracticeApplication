angular.module('customer').controller('ListCustomerCtrl',function($scope, customerService){

	console.info('CustomerListCtrl...');
	$scope.gridOptions = {

	};
	$scope.gridOptions.data = customerService.getCustomers();
	console.log($scope.gridOptions.data.length);

});