const server = require("./server");
const request = require("supertest");

describe("server.js module", () => {
  it("is the right environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("alive API endpoint", () => {
    it("returns 200, supertest", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("the correct message returning", () => {
      return request(server)
        .get("/")
        .expect({ message: `The API is alive` });
    });
    it("returns the headers correctly", () => {
      return request(server)
        .get("/")
        .expect("Content-Length", "30")
        .expect("Content-Type", /json/);
    });
  });
});
