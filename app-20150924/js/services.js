var bookStoreServices = angular.module('bookStoreServices', []);
/**自定义服务*/

bookStoreServices.service('bookStoreService_1', ['$scope',
    function($scope) {
    	console.log(55555555)
    }
]);

bookStoreServices.service('bookStoreService_2', ['$scope',
    function($scope) {}
]);

bookStoreServices.service('user', [
    function() {
    	return [
    		{name:"Shimily",grade:"18",age:"10",brand:"金牌会员"},
    		{name:"Sandy",grade:"15",age:"5",brand:"银牌会员"},
    	]
    }
]);

bookStoreServices.service('bookData', [
    function() {
    	return bookData =[
        	{id:"001",title:"《JavaScript》",des:"这是一本很好的书籍",author:"shimily"},
        	{id:"002",title:"《Html5 css3》",des:"我想买这本书",author:"小丸子"},
        	{id:"003",title:"《nodejs》",des:"这是一本很好的书籍",author:"廊坊市"},
        	{id:"004",title:"《angularjs》",des:"这本书真不错",author:"sandy"},
        	{id:"005",title:"《java》",des:"还没学习过",author:"螺丝刀"},
        	{id:"006",title:"《html》",des:"已经看完了",author:"张梦迪"},
        	{id:"007",title:"《css》",des:"看完了",author:"罗江县"}
        ];
    }
]);

