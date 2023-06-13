/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-05-19 17:04:55
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-06-13 10:59:50
 * @FilePath: /pcxt_dsr_web/src/utils/crypto.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/* 产引入jsencrypt实现数据RSA加密 */
// import JSEncrypt from 'jsencrypt' // 处理长文本数据时报错 jsencrypt.js Message too long for RSA
/* 产引入encryptlong实现数据RSA加密 */
import Encrypt from './jsencrypt.js' // encryptlong是基于jsencrypt扩展的长文本分段加解密功能。


export class SobRSA {
    whiteList=null
    publicKey =null
    privateKey =null
    isDebugger =null
    isOpen =null
    constructor(config){
        if(!config){
            throw Error('required init options!')
        }
        this.isOpen = config.isOpen
        this.whiteList = config.whiteList
        this.publicKey = config.publicKey
        this.privateKey = config.privateKey
        this.isDebugger = config.isDebugger
    }
    /**
 * @description: 过滤白名单
 * @param {*} path 白名单地址
 * @return {*} 不加密返回0，加密返回1 兼容小程序
 */
    filterWhiteList(path) {
        const serviceApi = this.whiteList
        if (
            !this.isOpen ||
            (serviceApi && serviceApi.findIndex(e => path.includes(e)) !== -1)
        ) {
            return 0
        }
        return 1
    }

    /**
     * @description: 加密数据RSA
     * @param {*} data 加密数据
     * @param {*} publicKey 密钥，默认程序配置的RSA公钥
     * @return {*}
     */
    encode(data, publicKey = this.publicKey) {
        var encryptor = new Encrypt()
        encryptor.setPublicKey(publicKey)
        return encryptor.encryptLong(data)
    }
    /**
     * @description: 解密数据RSA
     * @param {*} data 解密数据
     * @param {*} privateKey 密钥，默认程序配置的RSA私钥
     * @return {*}
     */
    decode(data, privateKey = this.privateKey) {
        var encryptor = new Encrypt()
        encryptor.setPrivateKey(privateKey)
        return encryptor.decryptLong(data)
    }
    /**
     * @description: 针对业务写的加密方法
     * @param {*} params 参数
     * @param {*} path 请求地址
     * @return {*}
     */
    encrypt  (params, path)  {
        if (JSON.stringify(params) === '{}') return {}
        const isPass = this.filterWhiteList(path)
        if (!isPass) {
            return params
        }
        const result = this.encode(encodeURIComponent(JSON.stringify(params)))
        if (this.isDebugger) {
            console.group()
            console.log('请求请求地址:' + path)
            console.log('请求传入数据: ' + JSON.stringify(params))
            console.log('请求URI编码之后: ' + encodeURIComponent(JSON.stringify(params)))
            console.log('请求RSA加密之后: ' + result)
            console.groupEnd()
        }
       
        return {
            encryptData: result
        }
    }

    /**
     * @description: 针对业务写的解密方法
     * @param {*} params 参数
     * @param {*} path 请求地址
     * @return {*}
     */
    decrypt  (params, path)  {
        if (JSON.stringify(params) === '{}') return {}
        const isPass = this.filterWhiteList(path)
        if (!isPass) {
            return params
        }
        const result = this.decode(params)
        if(this.isDebugger){
            console.group()
            console.log('返回请求地址:' + path)
            console.log('返回数据: ' + JSON.stringify(params))
            console.log('返回RSA加密之后: ' + result)
            console.log('返回URI编码之后: ' + JSON.stringify(JSON.parse(decodeURIComponent(result.replace(/\+/g, '%20')))))
            console.groupEnd()
        }
       
        return JSON.parse(decodeURIComponent(result.replace(/\+/g, '%20')))
    }


}


