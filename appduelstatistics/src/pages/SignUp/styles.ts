import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Logo = styled.View`
`;

export const AppTitle = styled.Text`
  font-size: 25px;
  color: #BDBDBD;
  font-family: 'PTSans-Regular';
  margin: 0 0 40px;
`;

export const AppDescription = styled.View`
`;

export const Text1 = styled.Text`
  font-size: 25px;
  color: #F2F2F2;
  font-family: 'PTSans-Regular';
  margin: 0 0 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #E0E0E0;
  font-family: 'PTSans-Regular';
  margin: 40px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #4F4F4F;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #BDBDBD;
  font-size: 18px;
  font-family: 'PTSans-Regular';
  margin-left: 16px;
`;
