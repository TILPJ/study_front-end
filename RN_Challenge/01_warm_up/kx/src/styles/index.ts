import {StyleSheet} from 'react-native';
import {COLORS, WIDTH} from '../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    paddingLeft: 5,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    fontSize: 14,
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
  },
  forgotButton: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.black,
  },
  forgotButtonText: {
    fontSize: 10,
    color: COLORS.black,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 120,
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
  },
  registerButtonText: {
    fontSize: 10,
    color: COLORS.black,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    height: 48,
    backgroundColor: COLORS.lightGray,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
});
