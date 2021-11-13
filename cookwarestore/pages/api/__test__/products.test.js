import { createMocks } from "node-mocks-http";
import handleProducts from "../products/index";

describe("api/products/index", () => {
  test("returns a list of products", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handleProducts(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });
});
