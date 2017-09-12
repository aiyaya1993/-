/*散列化整型键*/
/*
 *使用的数据是学生的成绩
 *随机产生一个九位数的键
 *用以识别学生身份和一门成绩
*/
//生成随机数
function getRandomInt(min, max) {
	return Math.floor(Math.random()*(max - min + 1));
}
function getStuData(arr) {
	for(var i = 0; i < arr.length; i++){
		var num = "";
		for(var j = 0; j <= 9; j++){  //内循环九位数的生成
			num += Math.floor(Math.random()*10); //随机一位数
			console.log(num)
		}
		num += getRandomInt(50,100); //随机成绩生成
		arr[i] = num;
	}
	console.log(arr)
}
var a = [89,90,87,76,66,65,35];
getStuData(a);