import { useRef } from 'react';
import './App.css';

let template = '';

export const App = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  document.onkeydown = function (e) {
    // KeyCode is deprecated, but it's the only way to get the keycode
    template += `
Key: ${e.key}
KeyCode: ${e.keyCode} 
MetaKey: ${e.metaKey}
CtrlKey: ${e.ctrlKey}
AltKey: ${e.altKey}
ShiftKey: ${e.shiftKey}
  `;

    textareaRef.current.value = template;
    textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
  };

  return (
    <div className="App">
      <div>
        <h1>Keyboard Events</h1>

        <textarea
          ref={textareaRef}
          readOnly
          name="keyboardEvents"
          id="keyboardEvents"
        />
      </div>
    </div>
  );
};
