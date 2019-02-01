

##  检验 `webpack` 规范支持

`webpack` 支持 `ES6`, `CommonJS`, `AMD`

```js
/* ES6 */
export default function(a, b) {
	return a + b;
}
```

```js
/* AMD */
define(function(require, factory) {
	"use strict";
	return function(a, b) {
		return a * b;
	}
})
```

```js
/* CommonJS */
module.exports = function(a, b) {
	return a - b;
}
```

>  "use strict"; 使用 `Javascript` 严格模式
>
> [output.publicPath](https://www.webpackjs.com/configuration/output/#output-publicpath): **js文件内部引用其他文件的路径**。

```bash
# 运行 打包文件
yarn run build
```

### Entry File（入口文件）

**入口起点(entry point)**指示 webpack 应该使用哪个模块，来作为构建其内部*依赖图*的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

```js
module.exprots ={
    // 入口文件位置
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    }
}
```

## Output （出口）

```
module.exports = {
    entry: './main',
    output: {
    	//生成 bundle.js 的路径
        path: path.resolve(__dirname, 'dist'), 
        // 生成 bundle.js 文件名
        filename: 'bundle.js'
    }
}
```





相关博客：

[阮一峰Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

