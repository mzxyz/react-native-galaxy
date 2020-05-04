/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import Button from 'components/button';

type Props = {};

class App extends PureComponent<Props> {
  render() {
    return (
      <SafeAreaView>
        <Button title="Test A" />
      </SafeAreaView>
    );
  }
}

export default App;
