import React, {useRef, useCallback, useState} from 'react';
import {Text} from 'react-native';

import {Buffer} from 'buffer';
import {RNCamera} from 'react-native-camera';

import ScanAreaPNG from './assets/images/scan-area.png';

import {Container, Camera, ScanImage, Button, ButtonLabel} from './styles';

export default function App() {
  const cameraRef = useRef(null);

  const [scan, setScan] = useState(false);
  const [code, setCode] = useState(null);

  const handleRead = useCallback((info) => {
    const {data} = info;

    setCode(String(new Buffer(data).toString('base64')));
    console.log(String(new Buffer(data).toString('base64')));
    setScan(false);
  }, []);

  return (
    <Container>
      {scan ? (
        <Camera
          captureAudio={false}
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={(e) => handleRead(e)}>
          <ScanImage source={ScanAreaPNG} />
        </Camera>
      ) : (
        <>
          <Text>{code}</Text>

          <Button onPress={() => setScan(true)}>
            <ButtonLabel>Scan QRCode</ButtonLabel>
          </Button>
        </>
      )}
    </Container>
  );
}
