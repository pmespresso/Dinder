import React, { Component } from 'react';
import { View } from 'native-base';
import { Navigator, Text } from 'react-native';
import Drawer from 'react-native-drawer';

import SideMenu from './components/sideMenu';

import SettingsStore from './stores/settingsStore';
import AuthStore from './stores/authStore';
import MatchStore from './stores/matchStore';
import PostStore from './stores/postStore';

import SplashScene from './scenes/splashScene';
import LoginScene from './scenes/loginScene';
import MatchScene from './scenes/matchScene';
import PostScene from './scenes/postScene';

import theme from './theme/base-theme';

const settings = new SettingsStore();
const authStore = new AuthStore();
const matchStore = new MatchStore();
const postStore = new PostStore();

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {
        settings: settings,
        auth: authStore,
        matches: matchStore,
        posts: postStore
      },
      theme: theme
    }
  }

  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open();
  }
  openDrawer() {
    this.setState({toggled: true});
  }
  closeDrawer() {
    this.setState({toggled: false});
  }

  renderScene(route, navigator) {
    switch(route.title) {
      case "Splash": {
        return <SplashScene {...route.passProps} navigator={navigator}/>
      }
      case "Login": {
        return <LoginScene {...route.passProps} navigator={navigator} />
      }
      case "Match": {
        return <MatchScene {...route.passProps} navigator={navigator} />
      }
      case "Post": {
        return <PostScene {...route.passProps} navigator={navigator} />
      }
      default: {
        console.log("default");
        return <Text>Default</Text>
      }
    }
  }
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        open={this.state.toggled}
        panOpenMask={0.5}
        content={<SideMenu navigator={this._navigator} theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
        >
          <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{
              title: "Splash",
              passProps: {
                stores: this.state.store,
                toggleDrawer: this.toggleDrawer.bind(this),
                theme: this.state.theme
              }
            }} />
       </Drawer>
    )
  }
}
