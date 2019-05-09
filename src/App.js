import React from "react";
import { Provider } from "react-redux";
import TodoList from "./TodoList";

import store from "./store";

const App = () => (
  <div className="App">
    <Provider store={store}>
      <TodoList />
    </Provider>
  </div>
);

export default App;
