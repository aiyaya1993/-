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
	this.insert = insert;
	this.remove = remove;
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
var color = new Llist();
color.insert('red','head');
color.insert('blue','red');
color.insert('yelllow','blue');
color.remove('red');
