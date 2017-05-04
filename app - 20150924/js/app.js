
/*模板路由*/
/*bookStoreApp作为启动点模块，启动点模块会依赖后面的模块*/
var bookStoreApp = angular.module('bookStoreApp', [   //模块间的依赖关系，ng开头的是只angular内置的模块
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',   
    'bookStoreServices', 'bookStoreDirectives'
]);


/*路由配置*/
bookStoreApp.config(function($routeProvider) {   //$routeProvider是内部所提供的路由机制
    $routeProvider.when('/login', {
        templateUrl: 'tpls/login.html',
        controller: 'loginCtrl'
    }).when('/index', {
        templateUrl: 'tpls/index.html',
        controller: 'IndexCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/login'
      
    });
    
    
});
