#############  工程目录结构说明  ###################
yt-ydyx/ ---工程目录
	css/*.css --通用样式文件存放目录
	data/*.json --挡板数据文件存放目录
	fonts/ --字体文件存放目录
	images/ --通用图片文件存放目录
	js/ --js文件存放目录
	    cordova/*.js --cordova相关插件
		libs/*.js --第三方通用js文件存放目录
		require.js --模块化开发依赖js
		ares.js –-框架通用js文件
		main.js –-requiresJS 配置文件、工程入口js文件
		ares.plugin.js --调用原生插件js文件
		ares.constant.js --定义一些常量js文件
	less/ --less文件存放目录
	pages/ -- 工程模块页面文件存放目录
	index.html –工程主页面入口文件


#############  页面模块目录结构说明  ###################
pages/ --页面html文件存放目录
    home --默认首页模块
        home.html -- 工程B面默认的首页面
        home.js --工程B面默认的首页面依赖js