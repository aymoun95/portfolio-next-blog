export function validateField(field, regex) {
  return regex.test(field.toLowerCase());
}
