var bookStoreDirectives = angular.module('bookStoreDirectives', []);
/*自定义指令*/
bookStoreDirectives.directive('bookStoreDirective_1', ['$scope',
    function($scope) {
    	
    }
]);

//bookStoreDirectives.run(function($templateCache){ //缓存
//	$templateCache.put("hello.html","<div>Hello everyone!!</div>");
//});

bookStoreDirectives.directive('ads',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		templateUrl:'tpls/ads.html',
		replace:true   //替换当前标签
	}
});



bookStoreDirectives.directive('bookStoreDirective_2', ['$scope',
    function($scope) {}
]);

bookStoreDirectives.directive('atitle',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<span>后台管理系统</span>',
		replace:true   //替换当前标签
	}
	
});

bookStoreDirectives.directive('clumlist',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<p>课程列表</p>',
		replace:true   //替换当前标签
	}
	
});


bookStoreDirectives.directive('booklist',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<p>书本列表</p>',
		replace:true   //替换当前标签
	}
	
});