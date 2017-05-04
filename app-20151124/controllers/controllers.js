var myBookCtrls = angular.module('myBookCtrls', [],function($provide){
	//。。。。。这些服务一般会分开来，用快捷方式声明。。。。
	//这里。。。。。仅仅用于学习测试。。。。。。.
	//自定义服务,可以依赖注入到所有的控制器内
	$provide.provider('sevice',function(){
		this.$get=function(){
			return{message:"该服务的名称是：sevice"}
		}
	});
	//自定义工厂---可以返回任何数据类型
	$provide.factory('factory1',function(){
		return [1,3,4,5,23,45];
	});
	//自定义服务 ---返回的必须是对象
	$provide.service('service1',function(){
		return {title:"sdssd"};
	});
});



myBookCtrls.config(function(APIKEY){
	console.log(APIKEY);
	console.log('config');
}); 

//constant可以注入到任何方法内，包括config
myBookCtrls.constant('APIKEY','aaa'); 

//value 只能注入到控制器内
myBookCtrls.value('vension','1.0.0');

//run 在config之后，其他服务之前
myBookCtrls.run(function(){
	console.log('run')
});






/*登录页控制器*/
myBookCtrls.controller('loginCtrl', ['$scope',
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

  		$scope.isRed=false;
  		$scope.isBlue=false;
  		$scope.colorRed = function(){
  			$scope.isRed=true;
  			$scope.isBlue=false;
  		}
  		$scope.colorBlue = function(){
  			$scope.isRed=false;
  			$scope.isBlue=true;
  		}
    }
]);

myBookCtrls.controller('HeadCtrl', ['$scope','user',  
    function($scope,user) {
 		$scope.user=user[0];
 		
    }
]);

/*首页控制器*/
myBookCtrls.controller('IndexCtrl', ['$scope','bookData','user',  
    function($scope,bookData,user) {
        $scope.bookData=bookData;
 		$scope.user=user[0];
 		$scope.loadData1 = function(){
 			console.log("执行加载数据。。。");
 		}
 		
    }
]);


/*课程列表*/
myBookCtrls.controller('ClumListCtrl', ['$scope','clumData','user',
    function($scope,clumData,user) {
 		$scope.clumData=clumData;
 		$scope.user=user[0];
    }
]);

/*列表页*/
myBookCtrls.controller('BookListCtrl', ['$scope','bookData','user',
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
   			var ids=$scope.bookData[i].id;
   			console.log(ids);
 		}

 		
    }
]);

myBookCtrls.controller('booksCtrl',['$scope','$http','$stateParams','$location','bookData',
	function($scope,$http,$stateParams,$location,bookData){
		$scope.bookData=bookData;
		var id=$stateParams.id;
		
		var urlId = $location.search().id;
		/*获取索引值*/
		function findeIndex(){
			var index =-1;
			angular.forEach($scope.bookData,function(item,key){
				//console.log(item.id)
				if(item.id ==urlId){
					index=key;
					return false;
				}
			})
			return index;
			
		}
		
		var index = findeIndex();
		//console.log(index);
		$scope.data=$scope.bookData[index];
		//console.log($scope.data.title);
	
	}
]);


/*尾部版权*/
myBookCtrls.controller('FooterCtrl', ['$scope','date',
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







myBookCtrls.controller('userCtrl',['$scope',
	function($scope){
	
		console.log($scope)
	}
]);



/*测试列表*/
myBookCtrls.controller('testListCtrl',['$scope','Data',
	function($scope,Data){
		$scope.ctrlFlavor = '盛开的鲜花';
		$scope.ctrlFlowers = '我是盛开的鲜花22';
		 $scope.Data=Data;
		console.log( $scope.Data)
		
	}
]);




/*测试*/
myBookCtrls.controller('testCtrl',['$scope','Data',
	function($scope,Data){
		
		 $scope.Data=Data;
		console.log( $scope.Data)
		
	}
]);


myBookCtrls.controller('testCtrl2',['$scope','Data',
	function($scope,Data){
		
		 $scope.Data=Data;
		console.log( $scope.Data)
		
	}
]);





















/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */