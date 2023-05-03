import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./Pages/Main";
import Book from "./Pages/Book";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book,
    }, {
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;