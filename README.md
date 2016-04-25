## koa-generator

### 用法

#### 运行
```
npm start
```

#### 测试
```
npm test
```
使用 Mocha + Chai 测试框架

#### 配置文件
在根目录下，新建 config.json 配置文件。参考配置如下：
```
{
  "port": 3000,
  "db": {
    "username": "username",
    "password": "password",
    "dbName": "dbName",
    "dbUrl": "dbUrl",
    "dbPort": 3306,
    "dialect": "mysql",
    "pool": {
      "maxConnections": 5,
      "minConnection": 1
    }
  }
}
```



#### 目录结构
- common
  - error_helper: 自定义错误类型
  - message_helper: 自定义返回值，可在请求中进行类似调用：
  ```
  return messageHelper.success(this);
  ```
  - tools: 自定义工具

- middlewares
  - easy_logger.js: 润色`koa-logs-ful`模块，让打印可以传入对象，在请求中进行类似调用：
  ```
  this.koaLogger.log(content);
  ```

- models
  - sequelize.js: sequelize 基础类，定义 model 时使用，具体参考 [官方文档](http://sequelizejs.com/)

- public
  - css js 等静态文件

- routes: 路由、controller

- services: 将对 model 的操作放于此

- test: 测试用例，使用 Mocha + Chai

- views: 页面文件，使用 jade



#### 其他
- 参数校验: [koa-validate](https://github.com/RocksonZeta/koa-validate)

- 日志记录:
  - 全局
  ```
  koaLogger.log('Hello logger');
  ```
  - 请求中
  ```
  this.koaLogger.log('Hello logger in request');
  ```

- body:
  - params: `this.request.body.fields`
  - files: `this.request.body.files`
