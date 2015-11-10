angular.module('authService', []).service('auth',authFnc);
authFnc.$inject=['$http','$q'];
function authFnc($http,$q) 
{
	 var userMap={};
	 userMap['jdoe']={}
	 userMap['jdoe']['pwd'] = 'jdoepwd';
	 userMap['jdoe']['role'] = 'admin';
	 userMap['psmith']={}
	 userMap['psmith']['pwd'] = 'psmithpwd';
	 userMap['psmith']['role'] = 'watcher';
	 userMap['tp']={}
	 userMap['tp']['pwd'] = 'tp';
	 userMap['tp']['role'] = null;

	 var fncContainer={
	 	localAuthAsk:localAuthAsk,
	 	authAsk:authAsk
 	};

	function authAsk(login,pwd)
	{
		var deferred = $q.defer();
		$http.post('#', {'login':login, 'pwd':pwd})
			.success(function(data, status, headers, config)
			{
				deferred.resolve(login);
			})
			.
			error(function(data, status, headers, config)
			{
				deferred.reject(login);
			});
			return deferred.promise;
	};

	function localAuthAsk(login,pwd)
	{
		var deferred = $q.defer();
		setInterval(function(login,pwd)
		{
			if(userMap[login])
			{
				if( userMap[login]['pwd'] == pwd && userMap[login]['role'] != null)
		 	{
		 			deferred.resolve(userMap[login]['role']);
		 	}
		 	else
		 	{
		 		deferred.reject("Pas drole");
		 	}
			}
			else
			{
				deferred.reject('Entrez des bonnes valeurs steuplait');
			}
		clearInterval(this);
	},3000,login,pwd);

		return deferred.promise;
	}



return fncContainer;
}



