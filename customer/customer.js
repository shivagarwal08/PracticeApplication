angular.module('customer', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('customer').config(function($stateProvider) {

    $stateProvider
        .state('customer',{
            url:'/',
            templateUrl:'customer/partial/list-customer/list-customer.html',
            contoller:'ListCustomerCtrl'
        })
        .state('customer-new',{
            url:'/create-customer',
            templateUrl:'customer/partial/create-customer/create-customer.html',
            contoller:'CreateCustomerCtrl'
        });
        /* Add New States Above */
});

