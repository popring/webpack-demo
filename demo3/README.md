## demo3 提取多页面公共代码

> `webpack` 中打包多页面应用过程中的**提取公共代码**部分。
>
> `webpack4.x` optimization.splitChunks 配置
>
> `webpack3.x` CommonsChunkPlugin 插件

optimization 优化配置

https://webpack.docschina.org/plugins/split-chunks-plugin/ 机翻结果

> `SplitChunksPlugin`
>
> 最初，块（以及在其中导入的模块）通过内部webpack图中的父子关系进行连接。这`CommonsChunkPlugin`用于避免跨越它们的重复依赖，但是无法进一步优化
>
> 从webpack v4开始，它`CommonsChunkPlugin`被删除了`optimization.splitChunks`。



> `splitChunks.cacheGroups` 
>
> 缓存组可以继承和/或覆盖任何选项`splitChunks.*`; 但是`test`，`priority`并且`reuseExistingChunk`只能在高速缓存组级别配置。要禁用任何默认缓存组，请将其设置为`false`。





### 相关连接

[webpack split-chunks-plugin](https://www.webpackjs.com/plugins/split-chunks-plugin/)

