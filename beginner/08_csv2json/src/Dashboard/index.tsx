import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiRefreshCw, FiXCircle, FiChevronsRight } from 'react-icons/fi';
import { plainTextCSV } from '../utils/parseCsvToJson';
import { plainTextJSON } from '../utils/parseJsonToCsv';
import { saveAs } from 'file-saver';

import { Container, Main } from './styles';

const Dashboard: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [method, setMethod] = useState(true); // true:csv2json false:json2csv
  const [entry, setEntry] = useState('');
  const [result, setResult] = useState('');
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [showCopied, setShowCopied] = useState(false);
  const [converting, setConverting] = useState(false);

  const onChangeEntry = (e: FormEvent<HTMLTextAreaElement>) => {
    setEntry(e.currentTarget.value);
  };

  const handleConvert = () => {
    // Remove all empty lines between break lines
    // https://stackoverflow.com/questions/16369642/javascript-how-to-use-a-regular-expression-to-remove-blank-lines-from-a-string

    const entryParsed = entry.replace(/^\s*[\r\n]/gm, '');

    setConverting(true);
    setFilename(undefined);
    if (method) {
      setResult(plainTextCSV(entryParsed.trim()));
    } else {
      setResult(plainTextJSON(entryParsed.trim()));
    }

    setConverting(false);
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

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setConverting(true);
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      if (method) {
        if (file.type !== 'text/csv') {
          alert('The file extension needs to be csv');

          setConverting(false);
          inputFileRef.current!.value = '';
          return;
        }

        const text = await file.text();
        setEntry(text);

        setResult(plainTextCSV(text.trim()));
        setFilename(file.name.split('.')[0]);
        setConverting(false);
      } else {
        if (file.type !== 'application/json') {
          alert('The file extension needs to be json');

          setConverting(false);
          inputFileRef.current!.value = '';
          return;
        }

        const text = await file.text();
        setEntry(text);

        setResult(plainTextJSON(text.trim()));
        setFilename(file.name.split('.')[0]);
        setConverting(false);
      }
    } else {
      setFilename(undefined);
      setConverting(false);
    }

    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
  };

  const handleUpload = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleDownload = () => {
    if (result) {
      if (method) {
        const blob = new Blob([result], {
          type: 'application/json',
        });
        saveAs(blob, `${filename ? filename : 'CSV2JSON'}.json`);
      } else {
        const blob = new Blob([result], {
          type: 'text/csv',
          endings: 'transparent',
          // File needs to be in crlf \r\n
          // https://datatracker.ietf.org/doc/html/rfc4180
        });
        saveAs(blob, `${filename ? filename : 'CSV2JSON'}.csv`);
      }
    }
  };

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
      <h1>CSV2JSON2</h1>
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
            <button type="button" onClick={handleConvert} disabled={converting}>
              Convert
            </button>
            <button type="button" onClick={handleUpload} disabled={converting}>
              <input
                type="file"
                name="inputFile"
                onChange={handleUploadFile}
                ref={inputFileRef}
                accept={method ? '.csv' : '.json'}
                style={{ display: 'none' }}
              />
              Upload a file
            </button>
          </div>
        </div>
        <div className="arrow">
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
            <button type="button" onClick={handleDownload}>
              Download
            </button>

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
    </Container>
  );
};

export default Dashboard;
