
/*模板路由*/
/*myBookApp作为启动点模块，启动点模块会依赖后面的模块*/
var myBookApp = angular.module('myBookApp', [   //模块间的依赖关系，ng开头的是只angular内置的模块
    'ngRoute','ui.router', 'ngAnimate', 'myBookCtrls', 'myBookFilters',   
    'myBookServices', 'myBookDirectives'
]);


/*ui路由配置*/
myBookApp.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
	 $stateProvider
	 	.state('login', {
            url: '/login',   //路径地址
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })
        .state('index', {
            url: '/index',
            templateUrl: 'templates/index.html',
            views: {
                '': {
                    templateUrl: 'templates/index.html'
                },
                'header@index': {
                    templateUrl: 'templates/header.html',
                    controller: 'HeadCtrl'
                },
                'main@index': {
                    templateUrl: 'templates/main.html',
                    controller: 'IndexCtrl'
                },
                
                'footer@index': {
                    templateUrl: 'templates/footer.html',
                    controller:"FooterCtrl"
                }
            }
        })
        .state('list', {
            url: '/list',
            templateUrl: 'templates/bookList.html',
            controller: 'BookListCtrl'
        })
        .state('index.list', {
            url: '/list',
            views: {
                'main@index': {
                    templateUrl: 'templates/bookList.html',
                    controller: 'BookListCtrl'
                }
            }
        })
        .state('index.clumList', {
            url: '/clumList',
            views: {
                'main@index': {
                    templateUrl: 'templates/clumList.html',
                    controller: 'ClumListCtrl'
                    
                }
            }
        })
        .state('index.books', {
            url: '/books',
            views: {
                'main@index': {
                    templateUrl: 'templates/books.html',
                    controller: 'booksCtrl'
                    
                }
            }
        })
        .state('index.user',{
        	url:'/user',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/user.html',
                    controller: 'userCtrl'
        		}
        	}
        })
        //测试列表
        .state('index.testList',{
        	url:'/testlist',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/tests/testlist.html',
                    controller: 'testListCtrl'
        		}
        	}
        })
        .state('index.test1',{
        	url:'/test1',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/tests/test1.html',
                    controller: 'testCtrl'
        		}
        		
        	}
        })
       .state('index.test2',{
        	url:'/test2',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/tests/test2.html',
                    controller: 'testCtrl2'
        		}
        		
        	}
        })
       //学习列表
       .state('index.studylist',{
        	url:'/studylist',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/study/studylist.html',
                    controller: 'studyListCtrl'
        		}
        		
        	}
        })
       .state('index.study1',{
        	url:'/study1',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/study/study1.html',
                    controller: 'studyCtrl1'
        		}
        		
        	}
        })
        .state('index.study2',{
        	url:'/study2',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/study/study2.html',
                    controller: 'studyCtrl2'
        		}
        		
        	}
        })
        .state('index.study3',{
        	url:'/study3',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/study/study3.html',
                    controller: 'studyCtrl3'
        		}
        		
        	}
        })
       .state('index.study4',{
        	url:'/study4',
        	views:{
        		'main@index':{
        			templateUrl: 'templates/study/study4.html',
                    controller: 'studyCtrl4'
        		}
        		
        	}
        })
       
       
       
       
       
       
       
       
});



