/*
 *使用dictionary类写一段程序
 *该程序用来存储一段文本中各
 *个单词出现的次数，但是每个
 *单词只显示一次
*/
// 首先分割文本中的单词
function division(sentence) {
	var arr = new Array(); //定义一个数组
	strs = sentence.split(' ');
	return strs;
	/*for(var i = 0; i<strs.length; i++){
		arr[i]
	}*/
}
//字典的实现
function Dictionary() {
	//var key = this.key;
	//var nums = this.nums;
	var words = this.words;
	var add = this.add;
	var datastore = this.datastore;
}
//添加函数
function add(key,value) {
	this.datastore[key] = value;
}
//取出文本中的每个单词作为索引key
function test(arr) {
	var a = new Array();
	for(key in arr){
	//	console.log(key)
	n = arr[key] 
	a[n] = 0;
	}
	return a;
	//console.log(a);
}
//计数器的实现
function count(arr,words) {
	//var count = 0;
	/*for(var i = 0; i<arr.length; i++) {
		arr[]
	}*/
	//for(key in arr){
	for(n in words){
		var temp = words[n];
		for(key in arr){
			if(key == temp){
				arr[key]++;
			}
		}
  	}
  	console.log(arr.sort())
	//}
}
//把每个单词作为key传入字典
var a = 'the brown fox jumped over the blue fox';
var words = division(a);
var b = test(words);
console.log(b)
var c = ['apple','apple','apple'];
count(b,words);