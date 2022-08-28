const request = require("supertest");
const app = require("./index.js");

describe("Cat API", () => {
  describe("get api route", () => {
    it("should return a message", async () => {
      const { body } = await request(app).get("/api");
      expect(body.message).toBe("Hello from CatWiki!");
    });
  });
  describe("get cat breed route", () => {
    describe("given the cat info does not exist", () => {
      it("should return a 404", async () => {
        let catId;

        await request(app).get(`/api/breed/${catId}`);
        expect(404);
      });
    });
  });
});
