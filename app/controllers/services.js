var myBookServices = angular.module('myBookServices', []);
/**自定义服务*/

myBookServices.service('myBook', [
    function() {
    	
    }
]);

myBookServices.service('myBookService_2', ['$scope',
    function($scope) {}
]);

myBookServices.service('user', [
    function() {
    	return [
    		{name:"Shimily",grade:"18",age:"10",brand:"金牌会员"},
    		{name:"Sandy",grade:"15",age:"5",brand:"银牌会员"},
    	]
    }
]);

myBookServices.service('bookData', [
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

myBookServices.service('clumData', [
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


myBookServices.service('date',['$timeout',function($timeout){
	var time = {};
	 (function tick () {
		  time.now = new Date().toString();
		  $timeout(tick, 1000); // how to do it using setInterval() ?
	 })();
	 return time;
	
}]);




myBookServices.service('Data', [
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



myBookServices.service('shopData', [
    function() {
    	return[
			{
				id:1001,
				name:'iphone4s',
				num:3,
				price:4300
			},
			{
				id:1002,
				name:'iphone5s',
				num:4,
				price:4800
			},
			{
				id:1003,
				name:'iphone4',
				num:1,
				price:4300
			},
			{
				id:1004,
				name:'iphone6s',
				num:2,
				price:6800
			},
			{
				id:1005,
				name:'ipad mini',
				num:2,
				price:2700
			}
			
		]
    }
]);


myBookServices.service('productData', [
	 function() {
	   return[
			{
				id:"021",
				name:"iPhone",
				num:1,
				price:"5322"
			},
			{
				id:"202",
				name:"Ipad",
				num:9,
				price:"2300"
			},
			{
				id:"003",
				name:"Mac",
				num:6,
				price:"8220"
			},
			{
				id:"010",
				name:"Ipad mini",
				num:2,
				price:"2220"
			},
			{
				id:"308",
				name:"Ipad mini2",
				num:5,
				price:"2220"
			},
			{
				id:"335",
				name:"魅族",
				num:5,
				price:"2220"
			},
			{
				id:"122",
				name:"小米",
				num:3,
				price:"2535"
			},
			{
				id:"205",
				name:"小米2",
				num:1,
				price:"2535"
			}
		]
	  }
]);


