/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-06-11 22:11:38
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-06-14 09:47:14
 * @FilePath: /study-main/rollup/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig } from "rollup";
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            dir: 'lib',
            format: 'esm',
            sourcemap:true
        },
    ],
    // babel({ babelHelpers: 'bundled' }),
    plugins: [resolve(), typescript(), commonjs(),  terser()],
});