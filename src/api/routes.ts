import request from "@/utils/request";
import {AUTH_BASE_URL} from './index'

/**  */
export const getUserRoutes = (data: { userId: Auth.UserId }): Promise<{
  routesList: Array<string>
}> => {
  return request({
    url: `${AUTH_BASE_URL}/getUserRoutes`,
    method: "post",
    data
  });
}
