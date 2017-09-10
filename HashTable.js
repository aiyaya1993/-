/*散列类*/
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
}
/*
 *除留余数法
 *键一般是字符串类型
 *将字符串中每个字符的ASCII相加
 *散列值就是ASCII码值的和除以数组长度的余数
*/
function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.length; ++i){
		total += data.charCodeAt(i); //返回unicode编码
	}
	return total % this.table.length;
}
//将数据存入散列表
function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}
//显示散列表中数据
function showDistro() {
	var n = 0;
	for(var i = 0; i<this.table.length; i++){
		if(this.table[i] != undefined){
			console.log(i + this.table[i]);
		}
	}
}
var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton"];
var hTable = new HashTable();
for(var i = 0; i<someNames.length; i++){
	hTable.put(someNames[i]);
}
hTable.showDistro();