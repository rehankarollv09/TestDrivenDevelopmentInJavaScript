const methods = require("./index");
//Without test suites;
test("The add function", () => {
  expect(methods.add(1, 2)).toBe(3);
});

//test suites
describe("Additive FUnction", () => {
  test("Add function", () => {
    expect(methods.add(1, 2)).toBe(3);
  });
  test("Subtract function", () => {
    expect(methods.subtract(1, 2)).toBe(-1);
  });
});
describe("Multiplicative function", () => {
  test("Multiplication function", () => {
    expect(methods.multiplication(2, 3)).toEqual(6);
  });
  test("Divison function", () => {
    expect(Number(methods.division(2, 3))).toBe(0.67);
    expect(methods.division(2, 0)).not.toEqual(Number);
  });
});
