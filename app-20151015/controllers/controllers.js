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
 		}
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


myBookCtrls.controller('booksCtrl',['$scope','$http','$stateParams','bookData',
	function($scope,$http,$stateParams,bookData){
		$scope.bookData=bookData;
		console.log($scope.bookData[0].art);
		var id=$stateParams.id;
		console.log($stateParams)
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




myBookCtrls.controller('studyListCtrl',['$scope','Data',
	function($scope,Data){
		 $scope.Data=Data;

	}
]);



myBookCtrls.controller('studyCtrl1',['$scope',
	function($scope){
		$scope.name="张三";
		$scope.count=0;
		setInterval(function(){
			//$apply实现脏检查
			$scope.$apply(function(){    
				$scope.date=new Date();
			});
		},1000);
		
		//$watch：监听一个model，当一个model每次改变时，都会触发第二个函数
		$scope.$watch('name',function(newVal,oldVal){
			++$scope.count;
			if($scope.count>6){
				$scope.name="修改次数已经超过6次";
			}
			console.log(newVal+"..."+oldVal);
		},true);  //true监听对象内的所以属性是否发生变化
		
		
		
		

		
	}
]);

myBookCtrls.controller('studyCtrl2',['$scope','shopData','$filter',
	function($scope,shopData,$filter){
		
		$scope.cart=shopData;
		
		/**
		 * 计算总价格
		 */
		$scope.totalPrice=function(){
			var total=0;
			angular.forEach($scope.cart,function(item){
				total +=parseInt(item.num)*item.price;
			})
			
			//$scope.num = $filter('currency')(123534);
			//$scope.date = $filter('date')(new Date());  
			return total= $filter('currency')(total) ;
		}
		
		/**
		 * 计算总数量
		 */
		$scope.totalNum=function(){
			var total=0;
			angular.forEach($scope.cart,function(item){
				total +=parseInt(item.num);
			})
			return total;
		}
		
		/*查找索引值*/
		var findIndex=function(id){
			var index =-1;
			angular.forEach($scope.cart,function(item,key){
				if(item.id ==id){
					index=key;
					return false;
				}
			})
			return index;
		}
		
		/**
		 * 移除一个产品
		 */
		$scope.remove=function(id){
			var index =findIndex(id);
			if(index !=-1){
				$scope.cart.splice(index,1);
			}
		}
		
		/**
		 * 增加数量按钮
		 */
		$scope.add=function(id){
			var index =findIndex(id);
			if(index !=-1){
				++$scope.cart[index].num;
			}
		}
		
		/**
		 * 减少数量按钮
		 */
		$scope.reduce=function(id){
			var index =findIndex(id);
			if(index !=-1){
				--$scope.cart[index].num;
				if($scope.cart[index].num<1){
					$scope.cart[index].num=1;
					var returnKey=confirm("是否删除该产品");
					//确认删除则调用移除的方法
					if(returnKey){
						$scope.remove(id);
					}
					
				}
			}
		}
		
		//$watch监听整个cart对象
		$scope.$watch('cart',function(newValue,oldValue){
			angular.forEach(newValue,function(item,key){
				if(item.num<1){
					var returnKey=confirm("是否删除该产品！");
					if(returnKey){
						$scope.remove(item.id);
						
					}else{
						item.num=oldValue[key].num;
					}
					
				}
			})
		},true);
	
	}
]);




myBookCtrls.controller('studyCtrl3',['$scope','sevice','factory1','service1',
	function($scope,sevice,factory1,service1){
		console.log(sevice.message);
		console.log(factory1);
		console.log(service1.title);
		
		//局部控制器调用的时候，要先知道其所在的模块
		$scope.name="张三";
		$scope.age="23";
		$scope.student=[{name:"张三",age:23},{name:"李四",age:26},{name:"小李",age:27},{name:"小张",age:21}];
	
		console.log($scope.shuju);
		$scope.Data=sevice;   //通过自动注入方式，共享数据
	
		$scope.today=new Date;
		
		
	}
]);



myBookCtrls.controller('studyCtrl4',['$scope','sevice',
	function($scope,sevice){

		//局部控制器调用的时候，要先知道其所在的模块
		$scope.name="张三";
		$scope.age="23";
		$scope.student=[{name:"张三",age:23},{name:"李四",age:26},{name:"小李",age:27},{name:"小张",age:21}];
	
		console.log($scope.shuju);
		$scope.Data=sevice;   //通过自动注入方式，共享数据
	
		$scope.today=new Date;
		
		
	}
]);







/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */