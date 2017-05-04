
/*模板路由*/
/*bookStoreApp作为启动点模块，启动点模块会依赖后面的模块*/
var bookStoreApp = angular.module('bookStoreApp', [   //模块间的依赖关系，ng开头的是只angular内置的模块
    'ngRoute','ui.router', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',   
    'bookStoreServices', 'bookStoreDirectives'
]);


/*ui路由配置*/
bookStoreApp.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
	 $stateProvider
	 	.state('login', {
            url: '/login',   //路径地址
            templateUrl: 'tpls/login.html',
            controller: 'loginCtrl'
        })
        .state('index', {
            url: '/index',
            templateUrl: 'tpls/index.html',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'header@index': {
                    templateUrl: 'tpls/header.html',
                    controller: 'HeadCtrl'
                },
                'main@index': {
                    templateUrl: 'tpls/main.html',
                    controller: 'IndexCtrl'
                },
                
                'footer@index': {
                    templateUrl: 'tpls/footer.html',
                    controller:"FooterCtrl"
                }
            }
        })
        .state('list', {
            url: '/list',
            templateUrl: 'tpls/bookList.html',
            controller: 'BookListCtrl'
        })
        .state('index.list', {
            url: '/list',
            views: {
                'main@index': {
                    templateUrl: 'tpls/bookList.html',
                    controller: 'BookListCtrl'
                }
            }
        })
        .state('index.clumList', {
            url: '/clumList',
            views: {
                'main@index': {
                    templateUrl: 'tpls/clumList.html',
                    controller: 'ClumListCtrl'
                    
                }
            }
        })
        .state('index.books', {
            url: '/books',
            views: {
                'main@index': {
                    templateUrl: 'tpls/books.html',
                    controller: 'booksCtrl'
                    
                }
            }
        })
        .state('index.user',{
        	url:'/user',
        	views:{
        		'main@index':{
        			templateUrl: 'tpls/user.html',
                    controller: 'userCtrl'
        		}
        	}
        })
        .state('index.test',{
        	url:'/test',
        	views:{
        		'main@index':{
        			templateUrl: 'tpls/test.html',
                    controller: 'testCtrl'
        		}
        	}
        })
});



