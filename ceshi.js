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
	var currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}
//删除某个节点
function remove(item){
	var currNode = this.find(item);
	var a = currNode.previous;
	a.next = currNode.next
}
//找到链表中最后一个节点
function findLast() {
	var currNode = new Node('head');
	while(currNode.next != null){
		currNode = currNode.next;
	}
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
	var currNode = this.head;
	currNode = this.findLast();
	while(currNode.previous != null){
		console.log(currNode.ele);
		currNode = currNode.previous;
	}
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
	console.log(currNode.ele)
	//return currNode;
}
var color = new Llist();
color.insert('red','head');
color.insert('blue','red');
color.insert('yelllow','blue');
//color.display();
color.remove('red');
color.show('yelllow');
