/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-06-15 10:53:12
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-06-15 11:00:09
 * @FilePath: /sobRsa/commitlint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // type 类型定义
        'type-enum': [2, 'always', [
            "feat", // 新功能 feature
            "fix", // 修复 bug
            "docs", // 文档注释
            "style", // 代码格式(不影响代码运行的变动)
            "refactor", // 重构(既不增加新功能，也不是修复bug)
            "perf", // 性能优化
            "test", // 增加测试
            "chore", // 构建过程或辅助工具的变动
            "revert", // 回退
            "build" // 打包
        ]],
        // subject 大小写不做校验
        // 自动部署的BUILD ROBOT的commit信息大写，以作区别
        'subject-case': [0]
    }
};
