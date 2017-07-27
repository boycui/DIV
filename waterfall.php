<?php
header('Content-type:text/html;charset=utf-8');
	// 读取json
	$jsonArr = file_get_contents("info/data.json");
	// json转化 php变量
	$pArr = json_decode($jsonArr);
	// 从$pArr中取出10个对象出来，返回的是一个索引数组
	$randArr = array_rand($pArr,3);

	// 创建一个空的数组
	$newArr = array();

	// 循环从总数组里根据随机的下标获取元素，并添加到$newArr中
	for($i=0;$i<count($randArr);$i++){
		// 获取随机下标
		$randkey = $randArr[$i];
		// 用随机下标去数组里获取一个元素
		$randObj=$pArr[$randkey];
		// 把随机获取的对象放入新数组中
		array_push($newArr,$randObj);
	}

	// 把$newArr转化为 关系型的数组
	$keyvalue = array(
		"items"=>$newArr
		);
	// var_dump($newArr)
	echo json_encode($keyvalue)
?>
