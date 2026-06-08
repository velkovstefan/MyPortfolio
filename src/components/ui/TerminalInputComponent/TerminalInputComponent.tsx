import { useState, useRef } from "react";


export function TerminalInput() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <div className="flex items-center gap-2 bg-black text-green-400 font-mono p-5 rounded-lg">
      <span>user@chat-bot:~$</span>
      <div className="relative flex-1 flex items-center">
        <input 
        ref={inputRef}
          className="bg-transparent outline-none w-full text-green-400 caret-transparent"
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {focused && (
          <span className="absolute animate-pulse bg-green-400 w-2 h-5"
            style={{ 
            left: `${Math.min(value.length, (inputRef.current?.offsetWidth ?? 0) / 8)}ch` 
            }}
          />
        )}
      </div>
    </div>
  );
}
