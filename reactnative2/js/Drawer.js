import React from "react";
import { DrawerNavigator } from "react-navigation";

import PrimerComponente from "./components/primerComponente";
import SegundoComponente from "./components/segundoComponente";
import TercerComponente  from "./components/tercerComponente";
import CuartoComponente from "./components/cuartoComponente";

import SideBar from "./components/sidebar";

const DrawerExample = DrawerNavigator(
  {
    Primero: { screen: PrimerComponente },
    Segundo: { screen: SegundoComponente },
    Tercero: { screen: TercerComponente },
    Cuarto: { screen: CuartoComponente }
  },
  {
    initialRouteName: "Cuarto",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
