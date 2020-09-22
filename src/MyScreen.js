import React, { Component } from 'react';
import { View, Text, Animated, ImageBackground, Dimensions } from 'react-native';

import Header from './common/Header'

const { width, height } = Dimensions.get('window');

class Greeting extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 28, color: '#fff' }}>我的 {this.props.name}</Text>
            </View>
        );
    }
}

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)// 透明度初始设为0
    }

    componentDidMount() {
        this.startAnimation()
    }

    startAnimation = () => {
        this.state.fadeAnim.setValue(0)
        Animated.timing(         // 随时间变化而执行动画
            this.state.fadeAnim,// 动画中的变量值
            {
                toValue: 1,    // 透明度最终变为1
                duration: 1000,//动画时长
                useNativeDriver: true
            }
        ).start(() => this.startAnimation())
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View                //使用可动画化的View组件
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,    //将透明度设为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <ImageBackground source={require('./assets/img/1111.jpg')} style={{ width: width, height: height }}>
                <Header />
                <FadeInView style={{
                    width: 250,
                    height: 50,
                    backgroundColor: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Greeting name='Proficiency' />
                </FadeInView>
            </ImageBackground>
        );
    }
}
