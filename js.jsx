js语法：
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

6. 条件语句 if switch
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
7.循环语句


