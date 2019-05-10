import React from "react";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import "./config/ReactotronConfig";

import store from "./store";

console.tron.log("testando");
const App = () => (
  <div className="App">
    <Provider store={store}>
      <TodoList />
    </Provider>
  </div>
);

export default App;
