import React, { Component } from 'react';
import {
  Button,
  Container,
  Content,
  Header,
  Text,
  Title,
  View
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Login from '../components/login';
import { observer } from 'mobx-react/native';

@observer
export default class LoginScene extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { theme, stores } = this.props;

    return (
      <Container theme={theme} >
          <Content scrollEnabled={false}>
            <Image source={stores.settings.loginBG} >
              <View>
                <Login {...this.props}/>
              </View>
            </Image>
          </Content>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute'
  },
  /* REACT NATIVE BEST PRACTICE FOR FULL SCREEN IMAGES*/
  loginBackgroundImage: {
    flex: 1
  },
  loginForeground: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 9,
    bottom: 0
  }
})
