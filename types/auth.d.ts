/*
 * @Author: wangbo 99548050@qq.com
 * @Date: 2024-12-17 15:44:14
 * @LastEditors: wangbo 99548050@qq.com
 * @LastEditTime: 2024-12-18 09:16:12
 * @FilePath: \vue-element-admin\types\auth.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace Auth {
    interface LoginData {
        /** 用户名222 */
        username: string;
        /** 密码1111 */
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