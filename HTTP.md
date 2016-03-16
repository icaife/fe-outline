## HTTP

 `HTTP`是`Hyper Text Transfer Protocol`（超文本传输协议）的缩写。`HTTP`是客户端浏览器或其他程序与Web服务器之间的应用层通信协议。在Internet上的Web服务器上存放的都是超文本信息，客户机需要通过HTTP协议传输所要访问的超文本信息。`HTTP`包含命令和传输信息，不仅可用于Web访问，也可以用于其他因特网/内联网应用系统之间的通信，从而实现各类应用资源超媒体访问的集成。



**HTTP请求响应模型**
HTTP协议永远都是客户端发起请求，然后服务器送回相应。

![](./img/http-res-req.jpg)

**TCP/IP 握手**

`TCP(Transmission Control Protocol)`　传输控制协议


**过程**

	客户端-----通过socket建立连接-----服务器
    客户端-----请求----->服务器
    客户端<-----响应-----服务器
    客户端-----断开-----服务器
    下一次连接.......

**HTTP 状态码**

    
	　　　　100 继续
	　　　　101 分组交换协

	　　　　200 OK
	　　　　201 被创建
	　　　　202 被采纳
	　　　　203 非授权信息
	　　　　204 无内容
	　　　　205 重置内容
	　　　　206 部分内容

	　　　　300 多选项
	　　　　301 永久地传送
	　　　　302 找到
	　　　　303 参见其他
	　　　　304 未改动
	　　　　305 使用代理
	　　　　307 暂时重定向

	　　　　400 错误请求
	　　　　401 未授权
	　　　　402 要求付费
	　　　　403 禁止
	　　　　404 未找到
	　　　　405 不允许的方法
	　　　　406 不被采纳
	　　　　407 要求代理授权
	　　　　408 请求超时
	　　　　409 冲突
	　　　　410 过期的
	　　　　411 要求的长度
	　　　　412 前提不成立
	　　　　413 请求实例太大
	　　　　414 请求URI太大
	　　　　415 不支持的媒体类型
	　　　　416 无法满足的请求范围
	　　　　417 失败的预期

	　　　　500 内部服务器错误
	　　　　501 未被使用
	　　　　502 网关错误
	　　　　503 不可用的服务
	　　　　504 网关超时
	　　　　505 HTTP版本未被支持


**session、cookie**

`HTTP`协议，是一种无状态协议，就是说客户端发送一次请求，服务器端接收请求，经过处理返回给客户端信息，然后客户端和服务器端的链接就断开了，为了维护他们之间的链接，让服务器知道这是前一个用户发送的请求，必须在一个地方保存客户端的信息，有2中解决方案，一是在客户端保存，二是在服务器端保存。

- 在客户端保存：cookie,如果用户禁用了cookie，只能通过重写的方式在每次请求后边加上一个参数来保存客户端的信息。cookie的结构是键值对形式，`key=value`，每个键值对之间用分号隔开,	`key1=value1;key2=value2`，在每次请求的时候，请求会带上这个cookie。每个cookie可以设置过期时间和作用域。
![](./img/cookie.png)
- 在服务器端保存：session，由于`HTTP`协议是无状态的，所以会通过session id来区分客户端，默认是依赖cookie来实现的，如果客户端禁用了cookie，那么会通过URL重写来实现，比如：`http://www.toursforfun.com?JSESSIONID=xxxxxx`。


##参考资料
[http://www.blogjava.net/zjusuyong/articles/304788.html](http://www.blogjava.net/zjusuyong/articles/304788.html)
[http://www.cnblogs.com/linzheng/archive/2011/01/25/1944914.html](http://www.cnblogs.com/linzheng/archive/2011/01/25/1944914.html)
[https://github.com/skyline75489/what-happens-when-zh_CN](https://github.com/skyline75489/what-happens-when-zh_CN)
[http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386832653051fd44e44e4f9e4ed08f3e5a5ab550358d000](http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386832653051fd44e44e4f9e4ed08f3e5a5ab550358d000)
[http://www.tuicool.com/articles/JBfi2ef](http://www.tuicool.com/articles/JBfi2ef)
[http://www.cnblogs.com/CBDoctor/archive/2012/10/17/2727073.html](http://www.cnblogs.com/CBDoctor/archive/2012/10/17/2727073.html)