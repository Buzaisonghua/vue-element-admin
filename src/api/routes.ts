import request from "@/utils/request";

/**  */
export const getUserRoutes = (data: { userId: Auth.UserId }): Promise<{
  routesList: Array<string>
}> => {
  return request({
    url: `/getUserRoutes`,
    method: "post",
    data
  });
}
