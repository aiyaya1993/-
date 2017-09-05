/*
 *字典主要是键和键值一对一
*/
//定义Dictionary类
function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.showAll = showAll;
	this.count = count;
}
//add方法
function add(key , value) {
	this.datastore[key] = value;
}
//find方法
//根据key找到对应值
function find(key){
	return datastore[key];
}
//remove方法 删除键-值

function remove(){
	delete this.datastore[key]; //delete用于删除对象的属性
}
//显示所有的键-值
function showAll() {
	//console.log(this.datastore);
	/*for(var i = 0; i< this.datastore.length; i++){
		console.log(this.datastore[i]);
		console.log(678)
	}*/
	/*console.log(this.datastore)
	this.datastore.forEach(function(key) { //为什么foreach()方法不能用
		console.log(datastore[key]);//
		console.log(567)
	})*/
  /*Object.keys(this.datastore).forEach(function(key) {
  	console.log(key + "->" + this.datastore[key]);
  },this)*/
  console.log(Object.keys(this.datastore).sort()) //['0':a,'1'"b"]
	for(var key in this.datastore.sort()){
		console.log(key + "->" + this.datastore[key]);
		//console.log(n)	//0 1
	}

}
//元素个数统计
function count() {
	var n = 0;
	Object.keys(this.datastore).forEach(function(key) {
		n++;
	})
	//console.log(n);
}
//删除所有元素
function remove() {
	Object.keys(this.datastore).forEach(function(key) {
		delete this.datastore[key];
	})
}
var book = new Dictionary();
book.add('a',1);
book.add('b',2);
book.showAll();
book.count();

var obj = {
	a:1,
	b:'apple',
	c:'hello',
	d:2
}
for(var n in obj){
	console.log(n)
}
/*for(var n in Object.keys(obj)){
	console.log();
}*/
