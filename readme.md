# sobrsa

sobrsa 是使用rsa进行长文本加密的npm，方便公司多个项目使用

### 如何使用

```
node -v >=14.18
npm i sobrsa -S
# or
yarn i sobrsa -S


```

```
initjs
import { SobRSA } from 'sobrsa'

const sobRSA = new SobRSA({
  whiteList: [], //过滤路径
  publicKey: process.env.VUE_APP_CRYPTO_PUBLIC_KEY,//共钥
  privateKey: process.env.VUE_APP_CRYPTO_PRIVATE_KEY,//私钥
  isDebugger: false, //是否打印信息
  isOpen: process.env.VUE_APP_CRYPTO_OPEN //打开关闭加密
})

export default sobRSA


//self.js
import sobRSA from '@/utils/initAsr'
sobRSA.decrypt(data, '/getuserInfo')
s = await decode(data, '/getuserInfo')




```

### 配置与方法

```
 type SobRsaConfig = {
    whiteList:Array<any>
    publicKey:String
    privateKey:String
    isDebugger:Boolean
    isOpen:Boolean
}
 type SobRsaClass = {
    whiteList:Array<any>
    publicKey:String
    privateKey:String
    isDebugger:Boolean
    isOpen:Boolean
    filterWhiteList:(path:String)=> 0|1   //该接口是否再白名单中，
    encode:(data:any,publicKey?:String)=>String  
    decode:(data:any,publicKey?:String)=>String
    encrypt:(params:any, path:String)=>String
    decrypt:(params:any, path:String)=>String
}
```


### 待完成

* [ ]  小程序兼容
