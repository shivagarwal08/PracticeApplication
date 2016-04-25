angular.module('login').controller('UserCtrl',function($scope, $http, loginService, OAuth, OAuthToken){

	$scope.message = '';
	$scope.user = {};
	$scope.user.username = 'user';
	$scope.user.password = 'user123';

	$scope.login = function(){
		$scope.message = 'Sending request';
		OAuth.getAccessToken($scope.user, {}).then(function(response){
			$scope.message += ' Access token '+response.data.access_token;
		});
	};

	$scope.check = function(){
		$scope.message += OAuthToken.getAccessToken();
		$scope.message += OAuthToken.getAuthorizationHeader();
		$scope.message += OAuthToken.getRefreshToken();
		$scope.message += OAuthToken.getTokenType();
	};

	$scope.authorize = function(){
		$http({
			method : 'GET',
			url : 'http://localhost:8080/SpringSecurityJava/index'
		}).then(function successCallback(response){
			console.log(response);
		},function errorCallback(response){
			console.log(response);
		});
	};

});