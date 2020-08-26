import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';

const scanSize = Dimensions.get('window').width - 100;

export const Container = styled.View`
  align-items: center;
  background: #fff;
  flex: 1;
  justify-content: center;
  width: 100%;
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

export const Result = styled.Text`
  align-self: center;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin: 32px 0;
`;

export const ResultText = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: #000;
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 32px 0;
  padding: 16px 32px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
