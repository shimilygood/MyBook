var bookStoreDirectives = angular.module('bookStoreDirectives', []);
/*自定义指令*/
bookStoreDirectives.directive('bookStoreDirective_1', ['$scope',
    function($scope) {
    	
    }
]);

bookStoreDirectives.directive('bookStoreDirective_2', ['$scope',
    function($scope) {}
]);

bookStoreDirectives.directive('ctags',function(){
	return{
		restrict:'ECA',   //E：标签类型  C:class类    A:属性类型    M:注释类型
		template:'<p>自定义指令</p>',
		replace:true   //替换当前标签
	}
	
});


