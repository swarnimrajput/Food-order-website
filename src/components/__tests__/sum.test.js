// src/components/__tests__/sum.test.js
import { sum } from "../sum";

test("Should calculate the sum of two numbers", () => {
  const result = sum(3,4);
  expect(result).toBe(7); // This should pass
});



