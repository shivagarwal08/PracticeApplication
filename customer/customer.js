angular.module('customer', ['ui.bootstrap','ui.router','ngAnimate','LocalStorageModule','ui.grid']);

angular.module('customer').config(function($stateProvider) {
    
    $stateProvider
        .state('customers',{
            url:'/customers',
            templateUrl:'customer/partial/list-customer/list-customer.html',
            controller:'ListCustomerCtrl'
        })
        .state('create-customer',{
            url:'/create-customer',
            templateUrl:'customer/partial/create-customer/create-customer.html',
            controller:'CreateCustomerCtrl'
        });
        /* Add New States Above */
});

