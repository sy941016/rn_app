import * as React from 'react';
// 4x
// import { createBottomTabNavigator,createStackNavigator, createAppContainer } from 'react-navigation';//导航
// 5x
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; //icon


import HomeScreen from "./src/HomeScreen"
import MyScreen from "./src/MyScreen"
import NewsScreen from "./src/NewsScreen"
import FindScreen from "./src/FindScreen"

import Page1 from "./src/page/page1"
import Page2 from "./src/page/page2"
import Page3 from "./src/page/page3"


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Home() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'My') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="My" component={MyScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Find" component={FindScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="page1" component={Page1} />
                <Stack.Screen name="page2" component={Page2} />
                <Stack.Screen name="page3" component={Page3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const TabNavigator = createBottomTabNavigator(
//     {
//         "首页": HomeScreen,
//         "消息": NewsScreen,
//         "发现": FindScreen,
//         "我的": MyScreen
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 if (routeName === '首页') {
//                     iconName = `ios-home`;
//                 } else if (routeName === '消息') {
//                     iconName = `md-information-circle`;
//                 } else if (routeName === '我的') {
//                     iconName = `ios-man`;
//                 } else {
//                     iconName = `ios-folder`;
//                 }

//                 return <IconComponent name={iconName} size={25} color={tintColor} />;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray'
//         },
//         initialRouteName: '首页'
//     }
// );

// const AppStack = createStackNavigator(
//     {
//         TabNavigator: {
//             screen: TabNavigator,
//             navigationOptions: {
//                 header: null
//             }
//         },
//         page1: {
//             screen: page1,
//             navigationOptions: {
//                 title: "page1"
//             }
//         },
//         page2: {
//             screen: page2,
//             navigationOptions: {
//                 title: "page2"
//             }
//         },
//         page3: {
//             screen: page3,
//             navigationOptions: {
//                 title: "page3"
//             }
//         }
//     },
//     {
//         initialRouteName: 'TabNavigator'
//     }
// )

// const AppStackContainer = createAppContainer(AppStack);

// export default class App extends Component {
//     render() {
//         return (
//             <AppStackContainer />
//         );
//     }
// }
