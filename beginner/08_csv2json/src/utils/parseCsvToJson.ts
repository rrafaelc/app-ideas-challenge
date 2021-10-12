const checkValue = (value: string) => {
  const trimVal = value === undefined ? '' : value.trim();
  const toNum = parseFloat(trimVal);

  if (isNaN(toNum)) {
    return trimVal;
  } else {
    return toNum;
  }
};

export const plainText = (text: string) => {
  const jsonArray: any = [];

  const lines = text.split('\n');

  // Split the first line to know how much keys need
  const title = lines[0].split(',');

  // Loop the lines from 1, because it's already have the title keys
  for (let i = 1; i < lines.length; i++) {
    // Get the items from the current line
    const items = lines[i].split(',');

    // Create an object for j loop to push after to jsonArray
    const jsonObj: any = {};

    // Loop the title and items at same time for each line
    for (let j = 0; j < title.length; j++) {
      const key = title[j] === undefined ? '' : title[j].trim();
      const value = checkValue(items[j]);

      // Check if the key already exists
      // https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
      const k = jsonObj.hasOwnProperty(key) ? `${key}__${j}` : key;
      jsonObj[k] = value;
    }

    jsonArray.push(jsonObj);
  }

  // https://stackoverflow.com/questions/2614862/how-can-i-beautify-json-programmatically
  return JSON.stringify(jsonArray, null, 2);
};
