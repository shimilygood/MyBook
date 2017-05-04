
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

myBookCtrls.controller('studyCtrl5',['$scope','productData',
	function($scope,productData){

		$scope.productData = productData;
	
		$scope.orderType = 'id';
		$scope.order = '-'; //降序
		
		//点击排序
		$scope.changOrder = function(type){
			$scope.orderType = type;
			if($scope.order ===''){
				$scope.order = '-';
			}else{
				$scope.order = '';
			}
		}
		
		/**
		 * 计算总数量
		 */
		$scope.totalNum=function(){
			var total=0;
			angular.forEach($scope.productData,function(item){
				total +=parseInt(item.num);
			})
			return total;
		}
		
		/**
		 * 计算总价格
		 */
		$scope.totalPrice=function(){
			var total=0;
			angular.forEach($scope.productData,function(item){
				total +=parseInt(item.num*item.price);
			})
			return total;
		}
		
		/*查找索引值*/
		var findIndex=function(id){
			var index =-1;
			angular.forEach($scope.productData,function(item,key){
				if(item.id ==id){
					index=key;
					return false;
				}
			})
			return index;
		}
		
		
		/**
		 * 删除
		 */
		$scope.remove=function(id){
			var index =findIndex(id);
			console.log(index)
			if(index !=-1){
				$scope.productData.splice(index,1);
			}
		}
		
		
	}
]);


myBookCtrls.controller('studyCtrl6',['$scope',
	function($scope){
		$scope.ctrlFlavor="百威";
		$scope.sayHello=function(name){
			alert("Hello"+name);
		}
		
	}
]);












