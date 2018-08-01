//应用程序的启动入口文件
 
//加载express模块
var express = require('express');
//创建app应用,相当于nodeJS的http.createService()
var app = express();
 
//1加载模板处理模块
var swig = require('swig');
//2配置模板应用模块
//定义当前应用所使用的模板引擎，第一个参数：模板引擎名称，同时也是模板文件的后缀；第二个参数：解析处理模板内容的方法
app.engine('html',swig.renderFile);
//3设置模板文件存放的目录,第一个参数必须是views，第二个参数是目录
app.set('views','./views');
//4注册模板，第一个参数：必须是view engine,第二个参数与定义模板引擎的第一个参数名称一致
app.set('view engine','html')
//5第一次读取会把模板缓存到内存当中，下次会直接读取，因此即使改了模板内容刷新也不会有变化，需要在开发过程中需要取消模板缓存
swig.setDefaults({cache:false});
 
/**
 * [description] 给app绑定首页路由，把一个url路径通过一个或多个方法绑定
 * @param  {[type]} req       request对象，保存客户端请求相关的一些数据
 * @param  {[type]} res       response对象
 * @param  {[type]} next){} 函数,用于执行下一个和当前路径匹配的函数
 * @return {[type]}           [description]
 */
app.get('/',function(req,res,next){	
	//6读取views目录下的指定文件，解析并返回给客户端
	//第一个参数：模板的文件相对于views/index.html
	//第二个参数：传递给模板使用的数据
 
	res.render('index');
})
 
//监听http请求
app.listen(8081);
