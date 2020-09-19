import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View,Text} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';//界面导航
import Icon from 'react-native-vector-icons/Ionicons';
import Header from "./common/Header";

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
//            适配iphoneX
            <SafeAreaView style={{ flex: 1 }}>
                <Header/>
                <MaterialTopTabNavigator/>
            </SafeAreaView>
        );
    }
}

class HomeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>萨摩</Text>
            </View>
        );
    }
}

class SettingsScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>哈士奇</Text>
            </View>
        );
    }
}

class ProfileScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>拉布拉多</Text>
            </View>
        );
    }
}

class FeedScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>阿拉斯加</Text>
            </View>
        );
    }
}

class FeedScreen2 extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>柴犬</Text>
            </View>
        );
    }
}

const MaterialTopTabNavigator = createAppContainer(createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '萨摩',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-home' color={tintColor} size={24}/>
                )
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel: '哈士奇',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-settings' color={tintColor} size={24}/>
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: '拉布拉多',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-list-box' color={tintColor} size={24}/>
                )
            }
        },
        Feed: {
            screen: FeedScreen,
            navigationOptions: {
                tabBarLabel: '阿拉斯加',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-microphone' color={tintColor} size={24}/>
                )
            }
        },
        Feed2: {
            screen: FeedScreen2,
            navigationOptions: {
                tabBarLabel: '柴犬',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-microphone' color={tintColor} size={24}/>
                )
            }
        }
    }, {
        initialRouteName: 'Home',
        // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
        animationEnabled: false, // 点击tab label切换tab时是否开启动画 默认为true
        // order: ['Settings', 'Home'],//定义tab顺序的routeNames数组
        tabBarPosition: 'top', // tab bar显示的位置，默认是 'top'
        tabBarOptions: {
            tabStyle:{
                width: 100
            },
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            activeTintColor: '#d03a28',
            inactiveTintColor: '#697077',
            fontSize: 30,
            style: {
                backgroundColor: '#fbf1ef'
                // borderTopWidth: 0.5,
                // borderTopColor: 'grey',
            },
            //设置 indicator(tab下面的那条线)的样式
            indicatorStyle: {
                height: 2, // 不显示indicator
                backgroundColor: '#d03a28'
            },
            //showIcon: true, // 是否显示图标, 默认为false
            //showLabel: false, // 是否显示label
            //文字的样式
            labelStyle: {
                fontSize: 16
            }
        }
    }));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});
