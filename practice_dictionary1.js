/*
 *写一个程序，该程序从一个文本文件读入
 *名字和电话号码，然后将其存入一个字典
 *该程序需要包含以下功能，显示单个电话
 *号码、显示所有电话号码、增加新电话号
 *码、删除电话号码、清空所有电话号码
*/
//到现在也没有get从txt文件读内容人的技能yo
//字典方法
function Dictionary() {
	this.datastore = new Array(); //字典一般以数组形式实现
	//this.name = name;
	//this.numbers = numbers;
	this.add = add;
	this.show = show;
	this.showAll = showAll;
	this.remove = remove;
	this.clearAll = clearAll;
}
//增加新的电话号码
function add(name,numbers) {
	this.datastore[name] = numbers;
}
//显示单个电话号码
function show(name) {
	for(key in this.datastore){
		if(key == name){
			console.log(name + this.datastore[name]);
		}
	}
}
//显示所有电话号码
function showAll() {
	for(key in this.datastore){
		console.log(key+this.datastore[key]);
	}
}
//删除电话号码
function remove(name) {
	for(key in this.datastore){
		if(key == name){
			delete this.datastore[name];
		}
	}
}
//清空号码簿
function clearAll() {
	for(key in this.datastore){
		delete this.datastore[key];
	}
}
var a = new Dictionary();
a.add('Amy',123456);
a.add('Susan',56789);
a.show('Amy');
a.remove('Susan');
a.showAll();