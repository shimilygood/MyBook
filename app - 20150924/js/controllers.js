var bookStoreCtrls = angular.module('bookStoreCtrls', []);

/*登录页控制器*/
bookStoreCtrls.controller('loginCtrl', ['$scope',
    function($scope) {
        $scope.login = {
            text: 'Hello'
        };
        $scope.userInfo={
        	name:'Shimily',
        	email:'135622329@qq.com',
        	password:'34165311',
        	autoLogin:true
        }
  		$scope.getData = function(){
  			console.log($scope.userInfo);
  		}
  		$scope.setData = function(){
  			$scope.userInfo={
	        	name:'Sandy',
	        	email:'355525@qq.com',
	        	password:'111111',
	        	autoLogin:true
	        }
  		}
  		$scope.resetData = function(){
  			 $scope.userInfo={
	        	name:'Shimily',
	        	email:'135622329@qq.com',
	        	password:'34165311',
	        	autoLogin:true
	        }
  		}
  		$scope.go = function(){
  			//state.go('index');
  			//console.log($stateProvider)
  			
  		}
    }
]);


/*首页控制器*/
bookStoreCtrls.controller('IndexCtrl', ['$scope','bookData','user',  
    function($scope,bookData,user) {
        $scope.welcome = {
            text: '后台管理系统'
        };
        $scope.bookData=bookData;
 		$scope.user=user[0];
 		console.log($scope.user.name);
 		
    }
]);




/*列表页控制器*/
bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books =[
        	{title:"《Ext江湖》",author:"大漠穷秋"},
        	{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
        	{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
        ]
    }
]);




/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */