js
基本语法：
1. 语句 /*声明,赋值*/
        var a = 1 + 3; /*var声明变量a,1 + 3叫做表达式且无;, ;语句结束*/
2. 变量 var a; a = 1 + 3;/*上句等价*/ 
        var a; a不赋值为undefined  
        赋值:(var x = 1;var x;)变量x声明了两次，第二次声明是无效的。(var x = 1;var x = 2;)但是，如果第二次声明的同时还赋值了，则会覆盖掉前面的值。
        var a = 1; 赋值基本等同 a = 1; 变量无法直接使用 x // ReferenceError: x is not defined
        /*差异：主要体现在delete命令无法删除前者。不写var不利于表达意图，而且容易创建全局变量*/
        var a, b;/*可以在同一条var命令中声明多个变量。*/
        类型:JavaScirpt是一种动态类型语言，也就是说，变量的类型没有限制，可以赋予各种类型的值。
        变量提升:一定是声明过的 //JavaScript是先解析代码获取所有被声明的变量，然后再运行。结果是所有的变量的声明语句会被提升到代码的头部，这就叫做变量提升（hoisting）
        console.log(a); var a = 1; 真正运行的是代码 var a; console.log(a); a = 1;

3.标识符:identifier是用来识别具体对象的一个名称(任意Unicode字母,$,_,数字) 
         第一个字符不是数字，第二个字符及后面的字符随意 
         *还有三个词虽然不是保留字，但是因为具有特别含义，也不应该用作标识符：Infinity、NaN、undefined。   
         *JavaScript有一些保留字，不能用作标识符：
         /*arguments、break、case、catch、class、const、continue、debugger、default、delete、do、
         else、enum、eval、export、extends、false、finally、for、function、if、implements、
         import、in、instanceof、interface、let、new、null、package、private、protected、public、
         return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。*/
           
4. 注释：// 单行 /**/多行
        历史上JavaScript兼容HTML代码的注释，所以<!--和-->也被视为单行注释，可是我用不了。-->只有在行首，才会被当成单行注释，否则就是一个运算符

5. 区块：与大多数编程语言不一样，JavaScript的区块不构成单独的作用域（scope）。也就是说，区块中的变量与区块外的变量，属于同一个作用域。
        {var a = 1;} a // 1
        区块往往用来构成其他更复杂的语法结构，比如for、if、while、function等。

6. 条件语句 if(true) switch(===)
         1. var m = 1; var n = 2;
			if (m !== 1)
			if (n === 2) console.log('hello');
			else console.log('world');

			//else总是跟随离自己最近的if语句
            等价于
			if (m !== 1) {
			  if (n === 2) {
			    console.log('hello');	
			  } else {
			    console.log('world');
			  }
			}// world

           if (m === 3) m += 1;这种写法要求条件表达式后面只能有一个语句。
         2. switch 采用的是严格相等运算符（===）
            var x = 1;
            switch (x) {
			  case true:
			    console.log('x发生类型转换');
			    break;
			  case "apple":
			    // ...
			    break;
			  default:
			    console.log('x没有发生类型转换');
			}// x没有发生类型转换
         3. 三元运算符  (condition) ? expr1 : expr2

         	var even = (n % 2 === 0) ? true : false;
         	等价于：
         	var even;
			if (n % 2 === 0) {
			  even = true;
			} else {
			  even = false;
			}
7. 循环语句 
          1. while (true) {statement;}//{}一条语句可省略
          2. do  statement while (expression);//循环至少运行一次，这是这种结构最大的特点,while语句后面的分号不能省略。
          3. for (initialize; test; increment)  statement //{}一条语句可省略

            var x = 3;
			for (var i = 0; i < x; i++) { //for ( ; ; )全省略都可以
			  console.log(i);
			}
			等价于：

			var x = 3;
			var i = 0;

			while (i < x) {
			  console.log(i);
			  i++;
			}
		  4.break 用于跳出代码块或循环, continue 用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环
		    for (var i = 0; i < 5; i++) {
			    console.log(i);
			    if (i === 3)
			        break;
			}//  0 1 2 3
			var i = 0;
			while (i < 100){
			  i++;
			  if (i%2 === 0) continue;
			  console.log('输出奇数为：' + i);
			}

			5.label: statement 标签相当于定位符，用于跳转到程序的任意位置 
			  标签通常与break语句和continue语句配合使用，跳出特定的循环。
				top:
				  for (var i = 0; i < 3; i++){
				    for (var j = 0; j < 3; j++){
				      if (i === 1 && j === 1) break top;
				      console.log('i=' + i + ', j=' + j);
				    }
				  }// i=0, j=0 // i=0, j=1 // i=0, j=2 // i=1, j=0 若不用则只能跳出里面的循环

数据类型：原始类型  //es6 Symbol 
		number, 
		string,
		boolean, 
		合成类型：
		object：各种值组成的集合 
		    狭义的对象（object）
			数组（array）
			函数（function）
		特殊值：
		undefined：表示“未定义”或不存在，即此处目前没有任何值
		null:表示空缺，即此处应该有一个值，但目前为空 // typeof null = "object"

		1.  *typeof 运算符 typeof '123' // "string" 
			typeof可以用来检查一个没有声明的变量，而不报错。
			if (typeof v === "undefined") {
			  // ...
			}

		2. 因为 typeof {}/[] 为 object 所以用instanceof运算符区分 [] *instanceof Array //true
            在if 语句 undefined == null == false //Undefined和Null只是普通的变量名。
            Number(null) // 0 
            Number(undefined) // NaN
			Object.prototype.toString方法

        3. 布尔值
        两元逻辑运算符： && (And)，|| (Or)
        前置逻辑运算符： ! (Not)
        相等运算符：===，!==，==，!=
        比较运算符：>，>=，<，<=
        转换规则是除了  undefined null false 0 NaN ""或''（空字符串）六个值被转为false 
                        空数组（[]）和空对象（{}）对应的布尔值，都是true。

数值：
        1. 整数和浮点数
        JavaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。1 === 1.0 // true
        容易造成混淆的是，某些运算只有整数才能完成，此时JavaScript会自动把64位浮点数，转成32位整数
        由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心
        0.1 + 0.2 === 0.3// false  
        0.3 / 0.1 // 2.9999999999999996
        (0.3 - 0.2) === (0.2 - 0.1) // false

        2. 数值精度
        第1位：符号位，0表示正数，1表示负数
        第2位到第12位：储存指数部分 11位 2047 = Math.pow(2, 11)-1  分出一半表示负数，21024到2-1023（开区间），超出这个范围的数无法表示
        第13位到第64位：储存小数部分（即有效数字）53
        IEEE 754规定，有效数字第一位默认总是1，不保存在64位浮点数之中，有效数字总是1.xx...xx的形式，其中xx..xx的部分保存在64位浮点数之中，最长可能为52位。
        精度最多只能到53个二进制位，这意味着，绝对值小于 pow = Math.pow(2, 53)，即-(pow-1)到pow-1 大于的不保存
