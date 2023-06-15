/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-06-14 09:24:27
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-06-15 09:23:27
 * @FilePath: /sobRsa/src/crypto/index.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export type SobRsaConfig = {
    whiteList:Array<any>
    publicKey:String
    privateKey:String
    isDebugger:Boolean
    isOpen:Boolean
}

export type SobRsaClass = {
    whiteList:Array<any>
    publicKey:String
    privateKey:String
    isDebugger:Boolean
    isOpen:Boolean
    filterWhiteList:(path:String)=> 0|1
    encode:(data:any,publicKey?:String)=>String
    decode:(data:any,publicKey?:String)=>String
    encrypt:(params:any, path:String)=>String
    decrypt:(params:any, path:String)=>String
}