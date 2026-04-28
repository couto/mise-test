import { test, expect } from "vitest";

test("GET google.com returns 200 with a body", async () => {
  const response = await fetch("https://www.google.com");
  expect(response.status).toBe(200);
  const body = await response.text();
  expect(body.length).toBeGreaterThan(0);
});
