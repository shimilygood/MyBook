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

bookStoreCtrls.controller('HeadCtrl', ['$scope','user',  
    function($scope,user) {
 		$scope.user=user[0];
 		
    }
]);

/*首页控制器*/
bookStoreCtrls.controller('IndexCtrl', ['$scope','bookData','user',  
    function($scope,bookData,user) {
        $scope.bookData=bookData;
 		$scope.user=user[0];
 		$scope.loadData1 = function(){
 			console.log("执行加载数据。。。");
 		}
 		
    }
]);


/*课程列表*/
bookStoreCtrls.controller('ClumListCtrl', ['$scope','clumData','user',
    function($scope,clumData,user) {
 		$scope.clumData=clumData;
 		$scope.user=user[0];
    }
]);

/*列表页*/
bookStoreCtrls.controller('BookListCtrl', ['$scope','bookData','user',
    function($scope,bookData,user) {
        $scope.bookData=bookData;
 		$scope.user=user[0];
 		var len=$scope.bookData.length;
 		for(var i=0; i<len; i++){
 			var clumid = $scope.bookData[i].clum-0;
   			switch(clumid){
   				case 1:
   					$scope.bookData[i].clum="Js";
   				break;
   				case 2:
   					$scope.bookData[i].clum="html";
   				break;
   				case 3:
   					$scope.bookData[i].clum="css";
   				break;
   				case 4:
   					$scope.bookData[i].clum="angularjs";
   				break;
   			}
 		}
    }
]);



/*尾部版权*/
bookStoreCtrls.controller('FooterCtrl', ['$scope','date',
    function($scope,date) {
 		$scope.date1= new Date();
 		$scope.date2= date;
// 		console.log($scope.date1)
// 		console.log($scope.date2)
		$scope.loadData2 = function(){
 			console.log("执行加载数据。。。222");
 		}
    }
]);


bookStoreCtrls.controller('booksCtrl',['$scope','$http','$stateParams','bookData',
	function($scope,$http,$stateParams,bookData){
		$scope.bookData=bookData;
		console.log($scope.bookData[0].art);
		var id=$stateParams.id;
		console.log($stateParams)
	}
]);




bookStoreCtrls.controller('userCtrl',['$scope',
	function($scope){
	
		console.log($scope)
	}
]);


bookStoreCtrls.controller('testCtrl',['$scope',
	function($scope){
		$scope.ctrlFlavor = '盛开的鲜花';
		$scope.ctrlFlowers = '我是盛开的鲜花22';
		
	}
]);


/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */