angular.module('loginApp').controller('loginCtrl',loginCrtFnt);

loginCrtFnt.$inject=['$scope','$log', 'auth', '$window'];

function loginCrtFnt($scope, $log, auth, $window)
{
	$scope.logAuth = function() 
	{
		$log.info('user login', $scope.user.login);
		$log.info('user pwd', $scope.user.pwd);
	};

	$scope.checkUser2 = function(userLogin, userPwd)
	{

		var promise = auth.localAuthAsk(userLogin, userPwd);
		promise.then(function(role) 
		{
			
			if(role == "admin") $window.location.href='admin.html';
			//console.log(promise);
		    
		    else if(role == "watcher") $window.location.href='watch.html';
		    

		}, 
		function(reason) 
		{
		  alert('Failed: ' + reason);
		}, 
		function(role) 
		{
		  alert('Got notification: ' + role);
		});

		/*validMsg = auth.checkUser(userLogin, userPwd);
		if(validMsg == "correct") $window.location.href='loginSuccess.html';*/
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

	$scope.checkUser3 = function(userLogin, userPwd)
	{
		var promise = auth.authAsk(userLogin, userPwd);
		promise.then(function(login)
		{
			if(login != null)
			{
				
			}
		})

	}
}