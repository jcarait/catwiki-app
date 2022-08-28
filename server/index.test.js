const request = require("supertest");

const app = require("./index.js");

describe("Cat API", () => {
  describe("get api route", () => {
    it("should return a message", async () => {
      const { body } = await request(app).get("/api");
      expect(body.message).toBe("Hello from CatWiki!");
    });
  });
  describe("get cat breed names", () => {
    describe("given the cat breed info exists", () => {
      it("should return a 200 status and the breed names", async () => {
        const { body, statusCode } = await request(app).get(`/api/breeds`);
        expect(statusCode).toBe(200);
        expect(body).toEqual(expect.arrayContaining([expect.any(String)]));
      });
    });
  });
});
