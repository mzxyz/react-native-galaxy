import React, {PureComponent} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import Button from 'components/button';

type Props = {};

class App extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <Button title="Test A" />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
