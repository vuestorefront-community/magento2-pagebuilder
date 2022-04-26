export const backslashReplace = (string: string) => JSON.parse(string.replace(/\\"/g, '"'));
