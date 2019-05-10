import Reactotroton from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotroton.configure()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}
