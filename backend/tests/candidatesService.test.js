const candidatesService = require("../services/candidatesService");
const axios = require("axios");

jest.mock("axios");

describe("candidatesService", () => {
  it("should fetch candidate data", async () => {
    const mockData = {
      data: {
        data: [
          {
            id: "123",
            attributes: {
              first_name: "John",
              last_name: "Doe",
              email: "john@example.com",
            },
            relationships: {
              job_application: {
                data: {
                  id: "abc",
                  attributes: { created_at: "2022-01-01" },
                },
              },
            },
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const result = await candidatesService.fetchCandidates();
    expect(result).toEqual([
      {
        candidate_id: "123",
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        job_application_id: "abc",
        job_application_created_at: "2022-01-01",
      },
    ]);
  });
});
