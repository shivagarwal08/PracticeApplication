angular.module('customer').factory('customerService',function(localStorageService,$http,$q) {

	var customerService = {};

	/*customerService.getCustomerFromJson = function(){
		var defer = $q.defer();
		$http.get('customer/customer.json').then(function(data){
			defer.resolve(data);			
		});
		return defer.promise;
	};*/


	customerService.getCustomers = function(){
		return localStorageService.get('customers') || [];
	};

	customerService.addCustomer = function(customer){
		var customers = localStorageService.get('customers') || [];
		customers.push(customer);
		localStorageService.set('customers',customers);
		return customers;
	};
	customerService.deleteCustomer = function(customer){
		var customers = localStorageService.get('customers') || [];
		for(var i=0; i<customers.length;i++){
			if(customers[i].name === customer.name){
				customers.splice(i,1);
				i=i+1;
			}
		}
		localStorageService.set('customers',customers);
		return customers;
	};

	return customerService;
});