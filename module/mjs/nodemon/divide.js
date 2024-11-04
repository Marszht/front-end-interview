export function divide (a, b) {
  if (b === 0) throw new Error("b can not be 0")
  return a / b;
}