declare namespace Auth {
    interface LoginData {
        /** 用户名 */
        username: string;
        /** 密码 */
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