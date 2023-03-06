import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://dev-event.vercel.app/events' }} />;
  }
}
