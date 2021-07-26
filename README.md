# 给css添加命名空间的小工具
> 一键添加命名空间


## 安装依赖
npm i

## 添加命名空间
在根目录下的`gulpfile.js`文件中，找到`const themeClassName = 'xxx'`，修改`xxx`为想要的名字

## 放入css文件
将`index.css`文件放至根目录`theme`文件夹中，默认只支持单个文件且命名必须为`index.css`（要批量修改可自行修改`gulpfile.js`源码）

## 执行命令
二选一，都可以
- `gulp css-wrap`
- `./node_modules/.bin/gulp css-wrap`

## 添加命名空间后的文件
默认存放在根目录`dist`文件夹下以`xxx`命名空间作为文件夹名中