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

import {
  Container,
  Main,
  MethodAndClearAll,
  MethodAndClearButton,
  BoxArea,
  Button,
} from './styles';

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

  const csv = `Paste or Upload csv here\n\nproduct,price,amount\nPen,1.50,4\nIphone,1399.00,1`;
  const json = `Paste or Upload json here\n\n[
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

  // If the user change the method
  useEffect(() => {
    setEntry('');
    setResult('');
  }, [method]);

  return (
    <Container>
      <Main>
        <BoxArea>
          <MethodAndClearAll>
            <MethodAndClearButton
              className="method"
              onClick={() => setMethod(!method)}
            >
              <div className="method">
                <FiRefreshCw color="#fff" size={16} />
                <span>{method ? 'CSV' : 'JSON'}</span>
              </div>
            </MethodAndClearButton>
            <MethodAndClearButton className="clearAll" onClick={handleClearAll}>
              <div className="clear">
                <span>Clear All</span>
                <FiXCircle color="#fff" size={20} />
              </div>
            </MethodAndClearButton>
          </MethodAndClearAll>

          <textarea
            name="entry"
            id="entry"
            placeholder={method ? csv : json}
            onChange={onChangeEntry}
            value={entry}
          />

          <div className="buttons">
            <Button
              className="convert"
              onClick={handleConvert}
              disabled={converting}
              color="#4E9F3D"
            >
              Convert
            </Button>
            <Button
              className="upload"
              onClick={handleUpload}
              disabled={converting}
              color="#4E9F3D"
            >
              <input
                type="file"
                name="inputFile"
                onChange={handleUploadFile}
                ref={inputFileRef}
                accept={method ? '.csv' : '.json'}
                style={{ display: 'none' }}
              />
              Upload a file
            </Button>
          </div>
        </BoxArea>

        <FiChevronsRight className="arrow" color="#fff" size={24} />

        <BoxArea>
          <div className="resultText">
            <span>{method ? 'JSON' : 'CSV'}</span>
          </div>
          <textarea
            name="result"
            id="result"
            readOnly
            value={result}
            disabled={result ? false : true}
          />
          <div className="buttons">
            <Button className="download" onClick={handleDownload}>
              Download
            </Button>

            <Button
              className={`copy ${showCopied ? 'active' : ''}`}
              onClick={handleCopy}
            >
              Copy
              <div className="tooltiptext">Copied!</div>
            </Button>
          </div>
        </BoxArea>
      </Main>
    </Container>
  );
};

export default Dashboard;
