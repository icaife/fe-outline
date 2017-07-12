# 正则表达式(Regular Expression) 
>正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表通常被用来检索、替换那些符合某个模式(规则)的文本。

## 工具
- http://regexr.com/
- http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp

## 入门
**元字符(metacharacter):**
- `.` : 除开换行符和结束符之外的单个字符
- `\d`:数字
- `\w`:字母、数字、下划线
- `\s`:空格
- `\b`:单词边界,不匹配这些单词分隔字符中的任何一个，它只匹配一个位置
- `\t`:制表符
- `\n`:换行符
- `\D`:非数字
- `\W`:非字母、数字、下划线
- `\S`:非空格
- `\B`:非单词边界

## 量词
- `+`
- `?`
- `*`
- `{n}`
- `{n,}`
- `{n,m}`
- `^`
- `$`

## 方括号
- []

## 修饰符
- `i`: ignore,忽略大小写
- `m`: 多行匹配，只在
- `g`: 全局查找

## 字符转义
> 由于正则字符可能和实际需要匹配的文本存在符号冲突，所以在正则表达式当中，需要转义。

## 分组
```
/(\d+)/
```

## RegExp
```
var reg = new RegExp('\\w\\d+','ig');
```
##分支条件
```
/0|1/
```

## 常用方法
- search
- match
- replace
- split
- exec
- test

##实例
- 手机号、数字、QQ号、英文、邮箱验证、IP地址、日期匹配
- 匹配html标签
- 匹配文本关键字

##TODO 进阶
- 贪婪与懒惰
- 捕获
- 前瞻