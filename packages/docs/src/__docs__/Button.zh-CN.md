---
title: Button
wrapperClass: md-button
---

# Button 按钮

常用的操作按钮

## 按钮颜色

使用`color`属性来定义 Button 的颜色

`color`: 'primary' | 'success' | 'info' | 'warning' | 'danger'

```vue demo slot#button <div>123</div>
<template>
  <div>
    <az-button>默认按钮</az-button>
    <az-button type="primary">主要按钮</az-button>
    <az-button type="success">成功按钮</az-button>
    <az-button type="warning">警告按钮</az-button>
    <az-button type="danger">危险按钮</az-button>
  </div>
</template>
```

## Button Props

| 参数        | 说明           | 类型                                                             | 默认值 |
| ----------- | -------------- | ---------------------------------------------------------------- | ------ |
| color       | 类型           | 'primary' / 'success' / 'warning' / 'danger' / 'info' / 'string' | -      |
| size        | 尺寸           | 'large' / 'small'                                                | -      |
| type        | 类型           | 'round' / 'circle' / 'link' / 'plain'                            | -      |
| loading     | 是否加载中状态 | boolean                                                          | false  |
| disabled    | 是否禁用状态   | boolean                                                          | false  |
| nativaz-type | 原生 type 属性 | 'button' / 'submit' / 'reset'                                    | button |
