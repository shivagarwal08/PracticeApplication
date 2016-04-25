angular.module('customer').controller('CreateCustomerCtrl',
	function($scope,$state,customerService){
	
	console.log('CreateCustomerCtrl');
	
	$scope.customer ={};
	$scope.customer.name = "Shiv Kumar Agarwal";
	$scope.customer.location = "Noida";
	$scope.customer.email = "shiv.agarwal08@gmail.com";
	$scope.submitted = false;

	$scope.add = function(){
		console.log('addCustomer');
		$scope.submitted = true;
		if($scope.custForm.$invalid === true){
			console.log('Form is invalid');
			return;
		}else{
			console.log('Form is valid');
			customerService.addCustomer($scope.customer);
		}
	};
});