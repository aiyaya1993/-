//链表结构
//Node类
function Node(element){
	this.element = element;
	this.next = null;
}
//LinkedList类
function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrevious = findPrevious;
	//this.remove = remove;
}
//找到插入节点的位置
/*注意每次通过定位找到的都应该是节点的位置 
相当于C中的地址 而不是元素
*/
function find(item){
	var currNode = this.head;
	console.log(currNode)
	console.log(currNode.next)
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
//插入新节点
//在
function insert(ele,item){
	/*var currNode = find(ele);
  var a = currNode.next;
  currNode.next = ele;*/
 var newNode = new Node(ele);
 console.log(newNode)
  var currNode = this.find(item);
  //console.log(currNode)
  var a = currNode.next;
  currNode.next = newNode;
  console.log(currNode.next)
  newNode.next = a;
}
//展示列表中的元素
//相当于给列表中的元素做一次循环
/*function display(){
	var currNode = this.head; //链表第一个元素
  while(currNode.next != null){
  	console.log(currNode.element)
  	currNode = currNode.next;
  }
}*/
function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		
		currNode = currNode.next;
		console.log(currNode.element);
	}
}
/*
 *找到需要查找的节点的前一个节点
*/
function findPrevious(item){
	var currNode = this.head;
	while( (currNode.next != null) && (currNode.next.element != item) ){

		currNode = currNode.next;
	}
	console.log(currNode)
	return currNode;
}
//删除某节点
function remove(item){
	var preNode = this.findPrevious(item);
	if(!(preNode.next == null)){
		preNode.next = preNode.next.next;
	}
}
var color = new LList();
color.insert('red','head');

color.insert('yellow','red');
color.findPrevious('yellow');

color.insert('blue','yellow');
color.remove('yellow')

//color.display();
