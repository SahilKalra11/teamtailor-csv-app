const request = require("supertest");
const app = require("../app");

describe("GET /api/download-csv", () => {
  it("should return CSV file", async () => {
    const response = await request(app).get("/api/download-csv");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toBe("text/csv");
    expect(response.text).toContain("candidate_id");
  });
});
