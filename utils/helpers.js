import { tagColor } from "./tagColor";

export function validateField(field, regex) {
  return regex.test(field.toLowerCase());
}

export const TAGS = Object.keys(tagColor);

export const isExistInTags = (tag) => {
  return TAGS.includes(tag);
};
export const partition = (array, isValid) => {
  const pass = [];
  const fail = [];
  array.forEach((element) => {
    if (isValid(element)) {
      pass.push(element);
    } else {
      fail.push(element);
    }
  });
  return [pass, fail];
};
