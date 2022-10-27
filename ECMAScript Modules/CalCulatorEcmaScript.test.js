import { add } from "./index";
describe("Additive function using ECMA script", () => {
  test("Add function", () => {
    expect(add(21, 1)).toEqual(22);
  });
});
