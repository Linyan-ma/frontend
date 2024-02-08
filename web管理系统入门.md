### 前置知识

JS：https://www.liaoxuefeng.com/wiki/1022910821149312

CSS：https://www.runoob.com/css/css-tutorial.html

Vue:https://cn.vuejs.org/ 

上诉知识先简单大致了解一下，达到会根据业务逻辑写代码即可



**最最重要的一点，多看文档！！！！！！！！！！！！！！！！ **

### 开始

现代web网站搭建分为前端、后端两部分，前端选型使用Vue（方便快速上手），服务端选nodejs（nodejs是只要会写js就会写nodejs，快速搭建）。 现代web技术通常较为完善，各种框架功能都相对比较完备，不需要自己一点点搭建，所以要学会使用各种现成的框架和依赖库辅助完成任务。



#### 第一步，前端网站搭建

快速搭建一个纯前端的静态管理系统，可以选择现有的框架vue-element-admin,查看文档：https://github.com/PanJiaChen/vue-element-admin/blob/master/README.zh-CN.md，通过这个框架，你最终可以快速搭建一个类似这样的管理系统，https://panjiachen.github.io/vue-element-admin/#/dashboard  这一步需要花费大量时间完成。



最终成果：访问本地服务（类似127.0.0.1/xxx），打开网页，可以注册，登陆，管理所有模块（权限管理可以登陆后），类似https://panjiachen.github.io/vue-element-admin/#/dashboard  这个的简化版本



#### 第二步，服务端网站搭建

选择https://midwayjs.org/docs/intro 作为基础框架，他可以帮你处理掉大多数的配置及部署，只需要专注于业务开发即可，此服务搭建起来是为了和前端数据通讯，第一步搭建的框架中涉及到数据的部分，通过前端axios请求此接口（例：http://localhost:7001/api/home）可以拿到数据，显示在前端页面。

最终成果：web服务搭建完成，梳理业务，可以与前端通讯，



#### 第三步,mongodb数据库连接

所有的数据都需存储在数据库中，使用mongodb，免去复杂的表配置，快速上手。需要先安装mongodb，参考一下前面的安装部分：https://blog.csdn.net/muguli2008/article/details/80591256 ，mongodb是不需要手动建表的，在midwayjs中使用直接增删改查即可。midway框架中有现成的使用案例，按照文档https://midwayjs.org/docs/extensions/mongodb配置即可。



最终成果：用户信息，管理数据等存储在数据库中，可以通过客户端查阅，并与midway配合完成前端的增删改查数据即可

