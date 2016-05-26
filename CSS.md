#CSS

> Cascading Style Sheets (CSS) 是一门指定文档该如何呈现给用户的语言，将文档转换成观众能够接受的方式。HTML文档主要表达了页面的语义，而CSS带么则让页面中的HTML代码具有了漂亮的外观，让页面鲜活、生动起来。

##基本语法&选择器

**基本语法：**一个CSS规则集包括选择器和声明组成。
![](./img/css-selector.gif)

**选择器：**CSS选择器是用来定位或者查找HTML文档中的元素，表示某一类元素的集合，可以用标签名、ID、Class、属性等来定位。
- 基础选择器

|选择器|含义|示例|
|:----|:----|:----|
|*|通用选择器，匹配任何元素|`*{padding:0;margin:0;`}|
|E|标签选择器，匹配所用使用E标签的元素|`p{font-size:2em;}`|
|info和E.info|class选择器，匹配所用class属性中含有info的元素|`.info{background:#fff;}  p.info{background:#000;}`|
|#info和E#info|id选择器，匹配所有id属性等于footer的元素|`#info{background:#ff0;} p#info{background:#ff0;}`|

- 组合选择器

|选择器|含义|示例|
|:----|:----|:----|
|E,F|多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔|`div,p {color:#f00;}`|
|E F|后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔|`#nav li{display:inline;}li a{font-weight:bold;}`|
|E > F|子元素选择器，匹配所有E元素的子元素F|`div > strong{color:#f00;}`|
|E + F|毗邻元素选择器，匹配所有紧随E元素之后的同级元素F|`p + p{color:#f00;}`|

- 伪类

|选择器|含义|示例|
|:----|:----|:----|
|E:first-child|匹配父元素的第一个子元素|`div:first-child{color:red;}`|
|E:link|匹配所有未被点击的链接|`a:link{color:red;}`|
|E:visited|匹配所有已被点击的链接|`a:visited{color:red;}`|
|E:active|匹配鼠标已经其上按下、还没有释放的E元素|`a:active{color:red;}`|
|E:hover|匹配鼠标悬停其上的E元素|`a:hover{background:red}`|
|E:focus|匹配获得当前焦点的E元素|`a:focus{border:1px solid red;}`|

- 伪元素

|选择器|含义|示例|
|:----|:----|:----|
|E:first-line|匹配E元素的第一行|`p:first-line{color:red;}`
|E:first-letter|匹配E元素的第一个字母|`p:first-letter{font-size:16px;color:red}`|
|E:before|在E元素之前插入生成的内容|`p:before{color:red;}`|
|E:after|在E元素之后插入生成的内容|`p:after{color:blue;}`|

>伪类和伪元素的区别：「伪类」的作用为「permit selection」，即允许选择一些无法用其他选择器选取的元素，必须对应某个现有的 HTML 元素。而「伪元素」则「create abstractions about the document tree beyond those specified by the document language」，意思是它并不依赖于 HTML 树的结构，即可以创造新的元素。

选择器还有很多，比如属性选择器、这里就不一一例举了。
![CSS选择器](./img/css-selector.png)

**权重算法**
首先你要知道的是：
`ID > (类|伪类|属性选择) > (标签类型|伪对象) > 通配符 `

行内样式(style)：`1000`
ID选择器(id)：`0100`
类选择器(类、属性、伪类)：`0010`
标签选择器：`0001`

例如，`body #wrap p {...}`，那么它的优先级指数就是 `1+100+1=102`，而`body div #wrap p {...}`的优先级指数就是 `1 + 1 + 100 + 1 =103`。

定义选择符的原则是尽量让选择符的权重低，目的是保证样式在应用于多个元素的时候容易被覆盖，提高代码的重用性和可维护性。
以下是具体的原则：
- CSS样式中尽量不要使用ID选择器。
- 减少子选择器的层级。 
- 使用组合的CSS类选择器，多组合、少继承，单一职责。

##盒子模型

> CSS中， Box Model叫盒子模型（或框模型），Box Model规定了元素框处理元素内容（element content）、内边距（padding）、边框（border） 和 外边距（margin） 的方式。在HTML文档中，每个元素（element）都有盒子模型，所以说在Web世界里（特别是页面布局），Box Model无处不在。

**W3C标准盒子模型**

![](./img/box-model.jpg)


**IE盒子模型**

![](./img/ie-box-model.jpg)

**盒子差异**

	.box{
		width:50px;
		height:50px
		padding:20px;
		border:5px solid #000;
		margin:20px;
	}

根据以上两幅图可以得出：
标准盒子模型盒子：`width = 50 + (20 * 2) + (5 * 2) + (20 * 2) = 140px`、`height = 50 + (20 * 2) + (5 * 2) + (20 * 2) = 140px`

IE盒子模型盒子宽度：`width = 50 + (20 * 2) = 90px`、`height = 50 + (20 * 2) = 90px`


**box-sizing**
- content-box:标准盒子模型，宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
- border-box:IE盒子模型。

##常见属性

- `position`:absolute、relative、fixed、static
- `display`:none、block、inline、inline-block、inherit

##常见布局
- 见[demo](./demo/css/)

##兼容性
- CSS Hack
- CSS Reset

##渐进增强、优雅降级
- 渐进增强(progressive enhancement)：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
- 优雅降级(graceful degradation)：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
- 区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

##Less
> LESSCSS是一种动态样式语言，属于CSS预处理语言的一种，它使用类似CSS的语法，为CSS的赋予了动态语言的特性，如变量、继承、运算、函数等，更方便CSS的编写和维护。

LESS源码：
		
	@color: #4D926F;

	.rounded-corners (@radius: 5px) {
	    -webkit-border-radius: @radius;
	    -moz-border-radius: @radius;
	    -ms-border-radius: @radius;
	    -o-border-radius: @radius;
	    border-radius: @radius;
	}

	.container{
		#header {
		    color: @color;
			rounded-corners(10px);
		}

		h2 {
		    color: @color;
		}		
	}


编译后的CSS：

	.container #header {
	    color: #4D926F;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    -ms-border-radius: 5px;
	    -o-border-radius: 5px;
	}

	.container h2 {
	    color: #4D926F;
	}

##编码规范
见 [TFF FE documentation](https://github.com/Tours4Fun/documentation/blob/master/development/frontend/style_standard.md)

##一些经验
- 使用高效的CSS选择器
	
		.ref p.list div{}
		.ref .list-item{}
		#ref_list_item{}

- 图片的相关处理。
- 其他


##参考资料

- [CSS入门教程](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)
- [30个最常用CSS选择器解析](http://blog.jobbole.com/1564/) 
- [W3Schools](http://www.w3schools.com/)
- [css选择器](http://www.cnblogs.com/webblog/archive/2009/07/07/1518274.html)
- [CSS 伪类和伪元素的区别](https://www.renfei.org/blog/css-pseudo-class-and-pseudo-element.html)
- [Less is More、Than CSS](http://www.1024i.com/demo/less/)
- [标准W3C盒子模型和IE盒子模型CSS布局经典盒子模型](http://www.cnblogs.com/cchyao/archive/2010/07/12/1775846.html)

