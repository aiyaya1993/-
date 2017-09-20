/*
 *双向链表的实现 
 *next和previous相当于一个属性
 *
*/
//Node对象
function Node(ele){
	this.ele = ele;
	this.next = null;
	this.previous = null;
	//this.remov = remove;
}
//链表的实现
function Llist(){
	this.head = new Node('head');
	this.find = find;
	this.findLast = findLast;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.dispReverse = dispReverse;
	this.show = show;
}
//找到插入节点的位置
function find(item){
	var currNode = this.head;
	while(currNode.ele != item){
		currNode = currNode.next;
	}
	return currNode;
}
//在item元素之后插入ele元素
function insert(ele,item){
	var newNode = new Node(ele);
	console.log(newNode.ele)
	var currNode = this.find(item);
	console.log(currNode)
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}
//删除某个节点
function remove(item){
	var currNode = this.find(item);
	var a = currNode.previous;
	a.next = currNode.next;
}
//找到链表中最后一个节点
function findLast() {
	var currNode = this.head;
	console.log(currNode.next)
	while(currNode.next != null){
		console.log(90)
		currNode = currNode.next;
		//console.log(currNode.next)
	}
	console.log(currNode.ele)
	return currNode;
}
//正向读取链表元素
function display() {
	var currNode = this.head;
	while(currNode.next != null){
		console.log(currNode.ele);
		currNode = currNode.next;
	}
	//console.log('display')
}
function dispReverse() {
	//var currNode = this.head;
	var currNode = this.findLast();
	while(currNode.previous != null){
		console.log(currNode.ele);
		//console.log(123456)
		currNode = currNode.previous;
	}
	//console.log(123456)
}
//当前节点在链表中向前移动n个节点
function advance(n) {
	//if
}
function show(item) {
	var currNode = this.head;
	while(currNode.next != null && currNode.ele != item ){
		currNode = currNode.next;
		//console.log
	}
	console.log(currNode)
	//return currNode;
}
var color = new Llist();
color.insert('red','head');
color.insert('blue','red');
//color.find("red")
console.log(color.ele);
color.findLast();
color.dispReverse();
//color.insert('blue','red');
//color.insert('yelllow','blue');
//color.display();
//color.remove('red');
//color.findLast();
//color.show('yelllow');
