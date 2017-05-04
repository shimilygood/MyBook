var myBookDirectives = angular.module('myBookDirectives', []);
/*自定义指令*/
myBookDirectives.directive('myBookDirective_1', ['$scope',
    function($scope) {
    	
    }
]);

//myBookDirectives.run(function($templateCache){ //缓存
//	$templateCache.put("hello.html","<div>Hello everyone!!</div>");
//});

myBookDirectives.directive('ads',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		templateUrl:'templates/ads.html',
		replace:true   //替换当前标签
	}
});



myBookDirectives.directive('myBookDirective_2', ['$scope',
    function($scope) {}
]);

myBookDirectives.directive('atitle',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<span>后台管理系统</span>',
		replace:true   //替换当前标签
	}
	
});

myBookDirectives.directive('clumlist',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<p>课程列表</p>',
		replace:true   //替换当前标签
	}
	
});


myBookDirectives.directive('booklist',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<p>书本列表</p>',
		replace:true   //替换当前标签
	}
	
});



myBookDirectives.directive('tusername',function(){
	return{
		restrict:'AE',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		transclude:true,  //transclude把原有的内容放入到指定的地方ng-transclude
		template:"<div>Shimily <span ng-transclude></span></div>"
	}
});


myBookDirectives.directive('loader',function(){
	return{
		restrict:'AE',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		link:function(scope,element,attrs){ 
			element.bind("mouseenter",function(event){ //元素绑定事件
				//scope.loadData1();
				//console.log(attrs);
				scope.$apply(attrs.howtoload);
			});
		}
	}
});


myBookDirectives.directive('uname',function(){
	return {
		restrict:'AE',
		scope:{},
		template:'<div><input type="text" ng-model="userName">{{userName}}</div>',
		replace:true
	}
});




//scope绑定策略:  @ 、 = 、 &
myBookDirectives.directive('drink',function(){
	return {
		restrict:'AE',
		scope:{
			flavor:'@'
		},
		template:'<div><input type="text" ng-model="flavor">{{flavor}}</div>',
		replace:true
		
//		link:function(scope,element,attrs){
//			scope.flavor=attrs.flavor;
//		}
	}
});

myBookDirectives.directive('drink2',function(){
	return {
		restrict:'AE',
		scope:{
			flowers:'@'    //=号测试不成功
		},
		template:'<input type="text" ng-model="flowers"><span>33{{flowers}}</span>'
	}
});






