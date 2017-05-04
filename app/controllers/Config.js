
function util($scope){
	//$scope.gs="ddddd";
	$scope.cfg={};
	$scope.cfg.kc="课程了列表";
	$scope.cfg.study="练习中心";
	$scope.cfg.test="测试中心";
	
	
	$scope.nav=[
		{
			href:'index',
			title:'首页'
		},
		{
			href:'index.clumList',
			title:'课程列表'
		},
		{
			href:'index',
			title:'课程管理'
		},
		{
			href:'index.list',
			title:'书本列表'
		},
		{
			href:'index.user',
			title:'用户管理'
		},
		{
			href:'index.studylist',
			title:'学习列表'
		},
		{
			href:'index.testList',
			title:'测试列表'
		}

	]
	
	$scope.modelInterface={};
	
	//获取文章列表
    //$scope.modelInterface.getArticleListsModel = createModel("/article/lists/");
	

}

