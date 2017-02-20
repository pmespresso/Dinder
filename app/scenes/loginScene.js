import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Text,
  Title,
  View
} from 'native-base';
import { Image } from 'react-native';
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
      <Container theme={theme}>
          <Header>
            <Title>HEY</Title>
          </Header>
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
