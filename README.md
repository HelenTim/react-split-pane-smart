# React Split Pane Smart

本组件基于 [react-split-pane-next](https://www.npmjs.com/package/react-split-pane-next)  1.0.6版本开发而来

解决了此组件本身有的bug以及添加了扩展性



Install

```sh
npm install react-split-pane-smart

# or if you use yarn

yarn add react-split-pane-smart
```

Usage

```jsx
import SplitPane, { Pane } from 'react-split-pane-smart';

<SplitPane split="vertical">
  <Pane initialSize="200px">You can use a Pane component</Pane>
  <div>or you can use a plain old div</div>
  <Pane initialSize="25%" minSize="10%" maxSize="500px">
    Using a Pane allows you to specify any constraints directly
  </Pane>
</SplitPane>;
```

**SplitPane 可选属性有：**

| 可选属性         | 作用                                           | 属性类型                          | 默认值                 |
| ---------------- | ---------------------------------------------- | --------------------------------- | ---------------------- |
| onDrag           | 拖动分割线时回调                               | (event: React.MouseEvent) => void | undefined              |
| resizerClassName | 分割线class                                    | string                            | ‘’                     |
| resizerChildNode | 分割线子元素                                   | React.ReactNode                   | null                   |
| resizerMouseOver | 分割线鼠标悬浮时回调函数                       | (event: MouseEvent) => void       | undefined              |
| onResizeEnd      | 鼠标抬起时会触发，返回两个面板大小             | (value: [,number]) => void        | undefined              |
| onResizeStart    | 鼠标在分割线按下时会触发                       | (event: MouseEvent) => void       | undefined              |
| onChange         | 布局发生变化时会调用                           | (value: [number,number]) => void  | undefined              |
| className        | 类名                                           | string                            | undefined              |
| split            | 排布方式                                       | string                            | vertical \| horizontal |
| resizerSize      | 分割线宽度：计算元素大小时会用到               | number                            | 1                      |
| needExactSizes   | 是否需要返回精确的地面板大小。关闭有利于性能。 | [string,string]                   | false                  |



**Pane可选属性**

| 可选属性    | 作用                                                         | 属性类型 | 默认值    |
| ----------- | ------------------------------------------------------------ | -------- | --------- |
| className   | 类型                                                         | string   | undefined |
| initialSize | 第一次渲染时面板大小：可以是例如 ’1‘ 、'24%'`、'200px'类型的值 | string   | '0'       |
| minSize     | 面板最小值：类型如initialSize                                | string   | undefined |
| maxSize     | 面板最大值：类型如initialSize                                | string   | '100%'    |
| size        | 设置面板值：类型如initialSize                                | string   | undefined |
| 注意        | 当同时具有size和initialSize时，优先使用size渲染面板大小      |          |           |

