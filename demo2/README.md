## demo2 - 编译ES6

### babel 系列

- `babel-loader` 负责ES6语法转换
- `babel-preset-env` 包含ES6, es7等版本语法转换规则
- `babel-polyfill` ES6 内置方法和函数转换垫片
- `babel-plugin-transfrom-runtime` 避免 `polyfill`污染全局变量

### 配置 babel

#### `webpack` 中配置 babel

```js
module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
				// 这里是配置
            }
        }
    }]
}
```

#### .babelrc

```js
// 新建同目录下 .babelrc 文件
{
    "presets": [
        [
            "env",
            {
                "targets": {
                    "browsers": ["last 2 version"]
                }
            }
        ]
    ],
    "plugins": ["transform-runtime"]
}
```



打包好就可以在旧浏览器中看到效果了



### 坑点

安装 `babel-loader` 的时候注意一下

如果安装的是 `8.x` 版本，可能会报错

解决方法，和作者一样 退回 `7.x` 版本

```json
{
    "babel-core": "^6.26.3",
	"babel-loader": "7.1.5"
}
```

我使用的是 `yarn`， 命令

```bash
# 先移除原先的版本
yarn remove babel-loader
# 添加 7.x 版本
yarn add --dev babel-loader
```



### 相关连接

[babel中文网](https://www.babeljs.cn/)

[webpack官网 babel-loader](https://webpack.docschina.org/loaders/babel-loader/)

