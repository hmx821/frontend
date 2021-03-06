// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node中的 JavaScript 具有文件操作的能力

//fs 是 file-system的简写，就是文件系统的意思
// 在NOde中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了所有的文件操作相关的Application
// 例如: fs.readFile 就是用来读取文件的

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2. 读取文件
/**
 * 第一个参数就是要读的文件路径
 * 第二个参数是一个回调函数
 * 	成功
 * 		data 数据
 * 		error null
 *  失败 
 * 		data null
 * 		error 错误对象
 */
fs.readFile('./data/hello.txt',function(error,data){
	//<Buffer 48 65 6c 6c 6f 20 6e 6f 64 65 6a 73>
	//默认文件中存储的其实都是二进制数据 0 1
	//这里卫视么看到的不是 0 和 1 呢? 原因是二进制都转为16进制了
	//但是无论是16进制还是二进制，人类都不认识
	//所以我们可以通过 toString 方法把其转为我们能认识的字符
	console.log(data.toString());
})