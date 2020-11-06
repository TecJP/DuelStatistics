import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
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
  font-size: 35px;
  color: #F2F2F2;
  font-family: 'PTSans-Regular';
  margin: 0 0 10px;
`;

export const Text2 = styled.Text`
  font-size: 20px;
  color: #BDBDBD;
  font-family: 'PTSans-Regular';
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #E0E0E0;
  font-family: 'PTSans-Regular';
  margin: 40px 0 24px;
`;


export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f2f2f2;
  font-size: 16px;
  font-family: 'PTSans-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const CreateAccountButtonText = styled.Text`
  color: #BDBDBD;
  font-size: 18px;
  font-family: 'PTSans-Regular';
  margin-left: 16px;
`;
