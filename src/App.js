import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";
import store from "./store";

import Routes from './routes'

console.tron.log("testando");
const App = () => (
  <div className="App">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
