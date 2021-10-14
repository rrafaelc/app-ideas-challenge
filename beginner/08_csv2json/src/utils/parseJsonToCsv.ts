const isJson = (text: string) => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

export const plainTextJSON = (text: string) => {
  if (!isJson(text)) {
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
      csv += `${titles[i]}\n`;
      break;
    }

    csv += `${titles[i]},`;
  }

  for (let k in obj) {
    csv += `${Object.values(obj[k])}\n`;
  }

  return csv;
};
