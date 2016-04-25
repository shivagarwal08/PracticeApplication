angular.module('login', ['ui.bootstrap','ui.router','ngAnimate','ngResource','ngCookies','angular-oauth2']);

angular.module('login').config(function($stateProvider, OAuthProvider, OAuthTokenProvider) {

	$stateProvider
	.state('login',{
			url:'/login',
			templateUrl : 'login/partial/user/user.html',
			controller : 'UserCtrl'
	});
    /* Add New States Above */

    OAuthProvider.configure({
        baseUrl: 'http://localhost:8080/SpringSecurityJava',
        clientId : 'clientId',
        clientSecret : 'clientSecret',
        grantPath : '/oauth/token',
        revokePath : '/oauth/revoke'
    });

    /*OAuthProvider.configure({
        name : 'token',
        options : {
            secure : false
        }
    });*/

});

