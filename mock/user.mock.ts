import { defineMock } from "./index";

export default defineMock([
  {
    url: "/api/login",
    method: ["POST"],
    body: ({ body }) => {
      const { username, password } = body
      if (username === 'root' && password === '123456') {
        return {code: "200", data: { accessToken:"A1",}}
      }
      if (username === 'admin' && password === '123456') {
        return {code: "200", data: { accessToken:"A2",}}
      }
      if (username === 'test' && password === '123456') {
        return {code: "200", data: { accessToken:"A3",}}
      }
      return {
        code: 50001,
        msg: '账号或密码错误'
      }
    },
  },
  {
    url: "/api/getUserInfo",
    method: ["POST"],
    body: ({ body }) => {
      const { token } = body
      if ( token === 'A1' ) {
        return {
          code: "200",
          data: {
            userId: 1,
            username: "root",
            nickname: "超级管理员",
            avatar:
              "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
          }
        }
      }
      if ( token === 'A2' ) {
        return {
          code: "200",
          data: {
            userId: 2,
            username: "admin",
            nickname: "系统管理员",
            avatar:
              "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
          }
        }
      }
      // if ( token === 'A1' ) {
        return {
          code: "200",
          data: {
            userId: 3,
            username: "test",
            nickname: "游客",
            avatar:
              "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
          }
        }
      // }
    }
  },
  {
    url: "/api/getUserRoutes",
    method: ["POST"],
    body: ({ body }) => {
      const { userId } = body
      if (userId === 1) {
        return {code: "200", data: { 
          routesList: ['Root', 'Admin', 'Test']
        }}
      }
      if (userId === 2) {
        return {code: "200", data: { 
          routesList: ['Admin', 'Test']
        }}
      }
      if (userId === 3) {
        return {code: "200", data: {
          routesList: ['Test']
        }}
      }
      return {
        code: 50002,
        msg: '用户信息不存在'
      }
    },
  },
]);

