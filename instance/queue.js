id node_id name
1   111    first
2   111    tom
3   222    jack
//为了找到node_id的集合
function queue(){
	//不重复node_id的汇集
	const nodeIDs = [];
	//node_id站队集合
	const queueMap = {};
	all.forEach(one => {
	  //查看是否有队列[]
	  let arr = queueMap[one.node_id];
	  //不存在则新建
	  if(!arr){
	  	arr = [];
	  	queueMap[one.node_id] = arr;
	  	nodeIDs.push(one.node_id)
	  }
	  //存在则入队
	  arr.push(one);
	})
//结果
queueMap:{111：[{id:1,node_id:111,name:first},{id:2,node_id:111,name:tom}],
          222:[{id:3,node_id:111,name:jack}]}
nodeIDs:[111,222]        