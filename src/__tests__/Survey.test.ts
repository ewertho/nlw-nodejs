import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "new search",
      description: "to a new search",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to create a not title", async () => {
    await request(app)
      .post("/surveys")
      .send({ title: "new search2", description: "to a new search2" });

    const response = await request(app).get("/surveys");
    expect(response.body.length).toBe(2);
  });
});
