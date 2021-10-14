import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiRefreshCw, FiXCircle, FiChevronsRight } from 'react-icons/fi';
import { plainTextCSV } from '../utils/parseCsvToJson';
import { plainTextJSON } from '../utils/parseJsonToCsv';

import { Container, Main, Footer } from './styles';

const Dashboard: React.FC = () => {
  const [method, setMethod] = useState(true); // true:csv2json false:json2csv
  const [entry, setEntry] = useState('');
  const [result, setResult] = useState('');
  const [showCopied, setShowCopied] = useState(false);

  const onChangeEntry = (e: FormEvent<HTMLTextAreaElement>) => {
    setEntry(e.currentTarget.value);
  };

  const handleConvert = () => {
    // Remove all empty lines between break lines
    // https://stackoverflow.com/questions/16369642/javascript-how-to-use-a-regular-expression-to-remove-blank-lines-from-a-string
    const entryParsed = entry.replace(/^\s*[\r\n]/gm, '');

    // Trim the textarea
    if (method) {
      setResult(plainTextCSV(entryParsed.trim()));
    } else {
      setResult(plainTextJSON(entryParsed.trim()));
    }
  };

  const handleCopy = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1500);
    }
  }, [result]);

  const handleClearAll = useCallback(() => {
    setEntry('');
    setResult('');
  }, []);

  const csv = `product,price,amount\nPen,1.50,4\nIphone,1399.00,1`;
  const json = `[
 {
  "product": "Pen",
  "price": 1.5,
  "amount": 4
 },
 {
  "product": "Iphone",
  "price": 1399,
  "amount": 1
 }
]`;

  useEffect(() => {
    setEntry('');
    setResult('');
  }, [method]);

  return (
    <Container>
      <h1>CSV2JSON2CSV</h1>
      <Main>
        <div className="inputTextArea entry">
          <div className="methodAndClear">
            <button
              type="button"
              className="method"
              onClick={() => setMethod(!method)}
            >
              <FiRefreshCw className="icon" color="#fff" size={16} />
              {method ? 'CSV' : 'JSON'}
            </button>
            <button type="button" className="clearAll" onClick={handleClearAll}>
              Clear All
              <FiXCircle color="#000" size={20} />
            </button>
          </div>
          <textarea
            name="entry"
            id="entry"
            placeholder={method ? csv : json}
            onChange={onChangeEntry}
            value={entry}
          />
          <div className="buttons">
            <button type="button" onClick={handleConvert}>
              Convert
            </button>
            <button type="button">Upload a file</button>
          </div>
        </div>
        <div className="switch">
          <FiChevronsRight color="#fff" size={24} />
        </div>
        <div className="inputTextArea result">
          <span>{method ? 'JSON' : 'CSV'}</span>
          <textarea
            name="result"
            id="result"
            readOnly
            value={result}
            disabled={result ? false : true}
          />
          <div className="buttons">
            <button type="button">Download</button>

            <button
              className={`copy ${showCopied ? 'active' : ''}`}
              type="button"
              onClick={handleCopy}
            >
              Copy
              <div className="tooltiptext">Copied!</div>
            </button>
          </div>
        </div>
      </Main>
      <Footer>
        <p>Made by rrafaelc</p>
      </Footer>
    </Container>
  );
};

export default Dashboard;
