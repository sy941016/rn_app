import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; //icon
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';//导航

import HomeScreen from "./src/HomeScreen"
import MyScreen from "./src/MyScreen"
import NewsScreen from "./src/NewsScreen"
import FindScreen from "./src/FindScreen"

import page1 from "./src/page/page1"
import page2 from "./src/page/page2"
import page3 from "./src/page/page3"

const TabNavigator = createBottomTabNavigator(
    {
        "首页": HomeScreen,
        "消息": NewsScreen,
        "发现": FindScreen,
        "我的": MyScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === '首页') {
                    iconName = `ios-home`;
                } else if (routeName === '消息') {
                    iconName = `md-information-circle`;
                } else if (routeName === '我的') {
                    iconName = `ios-man`;
                } else {
                    iconName = `ios-folder`;
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
        initialRouteName: '首页'
    }
);

const AppStack = createStackNavigator(
    {
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            }
        },
        page1: {
            screen: page1,
            navigationOptions: {
                title: "page1"
            }
        },
        page2: {
            screen: page2,
            navigationOptions: {
                title: "page2"
            }
        },
        page3: {
            screen: page3,
            navigationOptions: {
                title: "page3"
            }
        }
    },
    {
        initialRouteName: 'TabNavigator'
    }
)

const AppStackContainer = createAppContainer(AppStack);

export default class App extends Component {
    render() {
        return (
            <AppStackContainer />
        );
    }
}
