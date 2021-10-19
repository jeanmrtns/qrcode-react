import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

function QRCodeCanvas( { text } ) {

  const canvasRef = useRef('canvas');

  useEffect(() => {
    text && QRCode.toCanvas(canvasRef.current, text, {
      color: "#c3e2f1",
      width: 500
    }, error => error && console.log(error) )
  }, [text]);

  return (
    <canvas ref={canvasRef} id="canvas"></canvas>
  )

}

export default QRCodeCanvas;