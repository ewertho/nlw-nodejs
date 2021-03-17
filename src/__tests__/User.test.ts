import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "supert@email.com",
      name: "supertest",
    });
    expect(response.status).toBe(201);
  });

  it("Should be able to create a not email", async () => {
    const response = await request(app)
      .post("/users")
      .send({ email: "supert@email.com", name: "supertest" });

    expect(response.status).toBe(400);
  });
});
