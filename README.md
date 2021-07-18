# Visu Algo

一个算法可视化的项目

## 组成
* algov-core：应用 headless UI 的思想，将算法和数据结构的逻辑和数据剥离出来，方便跨平台、跨框架实现。
* algov-vue：用 vue 实现 UI 和交互的部分
* algov-react：用 react 实现 UI 和交互的部分

### core
这部分是最复杂的，需要一起讨论整个粒度需要拆分都多细。

可以参考
* https://headlessui.dev
* https://github.com/tailwindlabs/headlessui/


## 计划
可分为四个阶段

P1：实现各种数据结构的可视化展示（包括数据结构的增删改查，并在期间加入过渡动画）

P2：实现各种数据结构对应的经典算法（同样包含过渡动画）

P3：实现任意算法使用对应数据结构时都有过渡动画

P4：实现 leetcode 的 VSCode 插件


## 参考项目
* https://visualgo.net/en
* https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
* https://algorithm-visualizer.org/
* https://github.com/trekhleb/javascript-algorithms
