import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';

const scanSize = Dimensions.get('window').width - 300;

export const Container = styled.View`
  align-items: center;
  background: #fff;
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

export const Camera = styled(RNCamera)`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ScanImage = styled.Image`
  height: ${scanSize}px;
  width: ${scanSize}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: #000;
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
