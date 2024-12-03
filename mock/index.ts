import path from "path";
import { createDefineMock } from "vite-plugin-mock-dev-server";

const devUrl = import.meta.env.BASE_URL

export const defineMock = createDefineMock((mock) => {
  // 拼接url
  mock.url = path.join(
    devUrl + "/api",
    mock.url
  );
});
