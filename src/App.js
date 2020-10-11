import React from 'react';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import Items from './components/Items';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Items />
        <Items cake />
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
