const request = require("supertest");
const app = require("../server");

describe("Server health check", () => {
  it("should respond on /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok fine");
  });
});
