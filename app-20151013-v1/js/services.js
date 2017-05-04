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
        	{id:"001",clum:'1',title:"《JavaScript》",des:"这是一本很好的书籍",author:"shimily",art:"收到了附件里是的叫法收到了附件里是的叫法是六点放假了开发收到了附件里是的叫法是六点放假了开发是六点放假了开发"},
        	{id:"002",clum:'2',title:"《Html5 css3》",des:"我想买这本书",author:"小丸子",art:"水电费水收到了附件里是的叫法是六点放假了开发收到了附件里是的叫法是六点放假了开发电费水电费"},
        	{id:"003",clum:'5',title:"《nodejs》",des:"这是一本很好的书籍",author:"廊坊市",art:"是的规范收到了附件里是的叫法是六点放假了开发的非官方个回复"},
        	{id:"004",clum:'4',title:"《angularjs》",des:"这本书真不错",author:"sandy",art:"颠覆了看收到了附件里是的叫法是六点放假了开发收到了附件里是的叫法是六点放假了开发到过梵蒂冈梵蒂冈"},
        	{id:"005",clum:'1',title:"《java》",des:"还没学习过",author:"螺丝刀",art:"快递费家里的事会计收到了附件里是的叫法是六点放假了开发收到了附件里是的叫法是六点放假了开发法了的恐惧感"},
        	{id:"006",clum:'2',title:"《html+css》",des:"已经看完了",author:"张梦迪",art:"的说法据了收到了附件里是的叫法是六点放假了开发收到了附件里是的叫法是六点放假了开发解开了个 "},
        	{id:"007",clum:'3',title:"《css基础》",des:"看完了",author:"罗江县",art:"来得快浪费了的飞机个空间"},
        	{id:"008",clum:'1',title:"《JavaScript》",des:"这是一本很好的书籍",author:"shimily",art:"收到了附件里是的叫法是六点放假了开发"},
        	{id:"009",clum:'2',title:"《Html5 css3》",des:"我想买这本书",author:"小丸子",art:"水电费水电费水电费"},
        	{id:"010",clum:'5',title:"《nodejs》",des:"这是一本很好的书籍",author:"廊坊市",art:"是的规范的非官方个回复"},
        	{id:"011",clum:'4',title:"《angularjs》",des:"这本书真不错",author:"sandy",art:"颠覆了看到过梵蒂冈梵蒂冈"},
        	{id:"012",clum:'1',title:"《java》",des:"还没学习过",author:"螺丝刀",art:"快递费家里的事会计法了的恐惧感"},
        	{id:"013",clum:'2',title:"《html+css》",des:"已经看完了",author:"张梦迪",art:"的说法据了解开了个 "},
        	{id:"014",clum:'3',title:"《css基础》",des:"看完了",author:"罗江县",art:"来得快浪费了的飞机个空间"}
        ];
    }
]);

bookStoreServices.service('clumData', [
    function() {
    	return clumData =[
        	{uid:"001",title:"js",des:"这是一本很好的书籍"},
        	{uid:"002",title:"html",des:"我想买这本书"},
        	{uid:"003",title:"css",des:"这是一本很好的书籍"},
        	{uid:"004",title:"angularjs",des:"这本书真不错"},
        	{uid:"005",title:"nodejs",des:"还没学习过"},
        ];
    }
]);


bookStoreServices.service('date',['$timeout',function($timeout){
	var time = {};
	 (function tick () {
		  time.now = new Date().toString();
		  $timeout(tick, 1000); // how to do it using setInterval() ?
	 })();
	 return time;
	
}]);




bookStoreServices.service('Data', [
    function() {
    	return[
    		{
    			title:'no1',
    			content:'no1-content'
    		},
    		{
    			title:'no2',
    			content:'no2-content'
    		},
    		{
    			title:'no3',
    			content:'no3-content'
    		},
    	]
    }
]);











