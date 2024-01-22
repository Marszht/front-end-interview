# 模块化

## ES Module

## CommonJs

## UMD

## AMD

## 模块解析

> 当我们 import 或者 require 的时候编译器需要知道怎么去找到对应的文件

模块解析可以分为：`Classic` 和 `node` 两种模块解析方式

### Classic（ts 使用）

这种策略在以前是 TypeScript 默认的解析策略。 现在，它存在的理由主要是为了向后兼容。

#### 相对路径

在/root/src/folder/A.ts 文件里的 import { b } from "./moduleB"会使用下面的查找流程：

1. /root/src/moduleB.js
2. /root/src/module.d.ts

#### 绝对路径

> 不会跟 node 一样 在 node_modules 里面找

import { b } from "moduleB"，它是在/root/src/folder/A.ts 文件里,会按照以下顺序解析

1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
3. /root/src/moduleB.ts
4. /root/src/moduleB.d.ts
5. /root/moduleB.ts
6. /root/moduleB.d.ts
7. /moduleB.ts
8. /moduleB.d.ts

### Node

可以分为`js`的解析跟`ts`的解析

**先看 js**

#### 相对路径

/root/src/moduleA.js 中 包含 var x = require("./moduleB")

1. /root/src/moduleB.js
2. /root/src 中 package.json 中的 main 字段
3. /root/src/index.js

#### 绝对路径

/root/src/moduleA.js 里使用的是非相对路径导入 var x = require("moduleB");

1. /root/src/node_modules/moduleB.js
2. /root/src/node_modules/moduleB/package.json 中的 main 字段
3. /root/src/node_modules/moduleB/index.js
4. /root/node_modules/moduleB.js
5. /root/node_modules/moduleB/package.json main 字段
6. /root/node_modules/moduleB/index.js
7. /node_modules/moduleB.js
8. /node_modules/moduleB/package.json main
9. /node_modules/moduleB/index.js

ts 跟中使用 node 的解析差不多 但是因为多了 （ts，tsx，d.ts）,所以解析多时候需要把这些文件考虑进去

#### 相对路径

import { b } from "./moduleB" 在 /root/src/moduleA.ts

1. /root/src/moduleB.ts
2. /root/src/moduleB.tsx
3. /root/src/moduleB.d.ts
4. /root/src/package.json 中 types 字段
5. /root/src/moduleB/index.ts
6. /root/src/moduleB/index.tsx
7. /root/src/moduleB/index.d.ts

#### 绝对路径

/root/src/moduleA.ts 文件里的 import { b } from "moduleB"会以下面的查找顺序解析：

1.  /root/src/node_modules/moduleB.ts
2.  /root/src/node_modules/moduleB.tsx
3.  /root/src/node_modules/moduleB.d.ts
4.  /root/src/node_modules/package.json main types 字段
5.  /root/src/node_modules/@types/moduleB.d.ts
6.  /root/src/node_modules/index.ts
7.  /root/src/node_modules/index.tsx
8.  /root/src/node_modules/index.d.ts
9.  /root/node_modules/moduleB.ts
10.  /root/node_modules/moduleB.tsx
11.  /root/node_modules/moduleB.d.ts
12.  /root/node_modules/package.json main types 字段
13.  /root/node_modules/@types/moduleB.d.ts
14.  /root/node_modules/index.ts
15.  /root/node_modules/index.tsx
16.  /root/node_modules/index.d.ts
17.  /node_modules/moduleB.ts
18.  /node_modules/moduleB.tsx
19.  /node_modules/moduleB.d.ts
20.  /node_modules/package.json main types 字段
21.  /node_modules/@types/moduleB.d.ts
22.  /node_modules/index.ts
23.  /node_modules/index.tsx
24.  /node_modules/index.d.ts