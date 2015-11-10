angular.module('loginApp').controller('loginCtrl',loginCrtFnt);

loginCrtFnt.$inject=['$scope','$log', 'auth', '$window'];

function loginCrtFnt($scope, $log, auth, $window)
{
	$scope.logAuth = function() 
	{
		$log.info('user login', $scope.user.login);
		$log.info('user pwd', $scope.user.pwd);
	};

	$scope.checkUser = function(userLogin, userPwd){
		validMsg = auth.checkUser(userLogin, userPwd);
		if(validMsg == "correct") $window.location.href='loginSuccess.html';
	}

	this.logAuthObject=function(user)
	{
		$log.info('user login: ', user.login);
		$log.info('user pwd: ', user.pwd);
	};

	this.userList = function()
	{
		var patata = auth.userList();
		$log.info(patata);
	};

	
}