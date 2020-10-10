import React from 'react';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
