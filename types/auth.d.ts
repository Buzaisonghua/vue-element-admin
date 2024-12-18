/*
 * @Author: wangbo 99548050@qq.com
 * @Date: 2024-12-18 09:17:35
 * @LastEditors: wangbo 99548050@qq.com
 * @LastEditTime: 2024-12-18 09:18:06
 * @FilePath: \vue-element-admin\types\auth.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEz
 */
declare namespace Auth {
    interface LoginData {
        /** 用户名aaaa */
        username: string;
        /** 密码1111zzz */
        password: string;
    }
    interface AutoLoginRes {
        accessToken: String
    }

    interface UserInfo {
        name: string,
        age: number
    }
}