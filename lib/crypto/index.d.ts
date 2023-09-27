import { SobRsaConfig, SobRsaClass } from './index.d';
export declare class SobRSA implements SobRsaClass {
    whiteList: Array<any>;
    publicKey: String;
    privateKey: String;
    isDebugger: Boolean;
    isOpen: Boolean;
    constructor(config: SobRsaConfig);
    test(): void;
    /**
 * @description: 过滤白名单
 * @param {*} path 白名单地址
 * @return {*} 不加密返回0，加密返回1 兼容小程序
 */
    filterWhiteList(path: String): 0 | 1;
    /**
     * @description: 加密数据RSA
     * @param {*} data 加密数据
     * @param {*} publicKey 密钥，默认程序配置的RSA公钥
     * @return {*}
     */
    encode(data: any, publicKey?: String): String;
    /**
     * @description: 解密数据RSA
     * @param {*} data 解密数据
     * @param {*} privateKey 密钥，默认程序配置的RSA私钥
     * @return {*}
     */
    decode(data: any, privateKey?: String): any;
    /**
     * @description: 针对业务写的加密方法
     * @param {*} params 参数
     * @param {*} path 请求地址
     * @return {*}
     */
    encrypt(params: any, path: String): any;
    /**
     * @description: 针对业务写的解密方法
     * @param {*} params 参数
     * @param {*} path 请求地址
     * @return {*}
     */
    decrypt(params: any, path: String): any;
}
