## demo6 处理 SCSS

规则上只需在处理 `css` 之前 处理一下 `SCSS` 就 ok

```js
module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader","css-loader", "sass-loader"]
            }
        ]
    },
```

