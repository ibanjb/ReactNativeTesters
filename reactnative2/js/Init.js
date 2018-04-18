import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";
import Drawer from "./Drawer";
import PrimerComponente from "./components/primerComponente";
import SegundoComponente from "./components/segundoComponente";
import TercerComponente from "./components/tercerComponente";
import CuartoComponente from "./components/cuartoComponente";

const AppNavigator = StackNavigator({
  Drawer: { screen: Drawer },
  Primero: { screen: PrimerComponente },
  Segundo: { screen: SegundoComponente },
  Tercero: { screen: TercerComponente },
  Cuarto: { screen: CuartoComponente }
},
{
  initialRouteName: "Drawer",
  headerMode: 'screen'
});
export default class Init extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
