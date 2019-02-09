## demo5 处理css

> 实现点击 加载css 和 卸载css 样式

### 简写 添加规则

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader/useable", "css-loader"] // 注意style-loader 后有 useable
        }
    ]
}
```



### css 通过 link 引用

```js
module: {
    rules: [
        {
            test: /\.css$/, // 针对CSS结尾的文件设置LOADER
            use: [
                {
                    loader: "style-loader/url"
                },
                {
                    loader: "file-loader"
                }
            ]
        }
    ]
}
```

### css 放在 `style` 标签内

```js
module: {
    rules: [
        {
            test: /\.css$/, // 针对CSS结尾的文件设置LOADER
            use: [
                {
                    loader: "style-loader",
                    options: {
                        singleton: true // 处理为单个style标签
                    }
                },
                {
                    loader: "css-loader"
                }
            ]
        }
    ]
}
```



相关链接

https://www.webpackjs.com/loaders/css-loader/