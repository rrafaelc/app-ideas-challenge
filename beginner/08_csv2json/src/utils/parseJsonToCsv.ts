let jsonValid = false;

const isJson = (text: string) => {
  const isNested = (obj: any) =>
    Object.keys(obj).some(function (key) {
      return obj[key] && typeof obj[key] === 'object';
    });

  try {
    const obj = JSON.parse(text);
    if (isNested(obj)) {
      jsonValid = true;
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

export const plainTextJSON = (text: string) => {
  if (!isJson(text)) {
    if (jsonValid) {
      return 'Nested JSON structures are not supported.';
    }
    return 'This is not a valid json.';
  }

  let csv: string = '';
  const titles: string[] = [];

  const parseJson: object[] = JSON.parse(text);
  const obj: object[] =
    parseJson.length === undefined ? [parseJson] : parseJson;

  Object.keys(obj[0]).forEach((t) => {
    titles.push(t);
  });

  for (let i = 0; i < titles.length; i++) {
    if (i === titles.length - 1) {
      // Break lines needs to be in crlf format
      // https://datatracker.ietf.org/doc/html/rfc4180
      csv += `${titles[i]}\r\n`;
      break;
    }

    csv += `${titles[i]},`;
  }

  // eslint error 'no-loop-func'
  // Can not use a function inside a for in loop
  // https://eslint.org/docs/rules/no-loop-func
  // https://github.com/eslint/eslint/issues/5044
  const incCsv = (text: string) => {
    csv += text;
  };

  for (let k in obj) {
    Object.values(obj[k]).forEach((val: string | number, index, array) => {
      // Remove any line breaks of the string

      const valParsed: string = val.toString().replace(/(\r\n|\n|\r)/gm, '');

      if (index === array.length - 1) {
        // This add manually a line break on the end of the string
        incCsv(`${valParsed.trim()}\r\n`);
        return;
      }

      incCsv(`${valParsed.trim()},`);
    });
  }

  // To make sure this css is valid
  // https://csvlint.io/
  return csv;
};
