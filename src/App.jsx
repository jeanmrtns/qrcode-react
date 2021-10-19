import { useState } from "react";
import QRCodeCanvas from "./components/QRCodeCanvas";
import './style.css'

function App() {

  const [text, setText] = useState('');

  return (
    <main>
      <label htmlFor="text">Insira sua URL</label>
      <input id="text" type="text" value={text} onChange={( {currentTarget} ) => setText(currentTarget.value)} />
      <QRCodeCanvas text={text} />
    </main>
  );
}

export default App;
