function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  try {
    return Number(a / b).toFixed(2);
  } catch (err) {
    return "Cannot divide by zero";
  }
}
module.exports = { add, subtract, multiplication, division };
