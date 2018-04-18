import React from "react";
import { StackNavigator } from "react-navigation";
import Testing from "./Testing";

const AppNavigator = StackNavigator({
        Testing: { screen: Testing },
    },
    {
        initialRouteName: "Testing",
        headerMode: "none",    
});
export default () =>
    <Root>
        <AppNavigator />
    </Root>;