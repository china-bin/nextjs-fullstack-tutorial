
# 静态路由

## 自定义404页面
* 在目录新建 `not-found.tsx`文件


# 动态路由
* 可以动态的接收链接的参数,
## 接收单个参数
* 比如有一个文章列表，然后要进入对应的文章，然后url后面肯定要接收动态的文章id，来显示对于的文章详情页.
* 可以新建目录 `[postId]`来表示用url来接受动态的文章id
* 在 `[postId]` 下的 page.tsx就可以通过`params.postId`来拿到参数了

## 接收所有参数
* 可以新建目录 `[...args]` ,然后再 page.tsx就可以通过`params.args`来拿到类型是数组的所有参数了


# 获取数据生成静态页面



