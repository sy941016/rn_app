import React, {Component} from 'react';
import {View, Text, Animated, ImageBackground, Dimensions} from 'react-native';
import Echarts from 'native-echarts';

import Header from './common/Header'

const {width, height} = Dimensions.get('window');

class Greeting extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 28, color: '#fff'}}>我的 {this.props.name}</Text>
            </View>
        );
    }
}

class FadeInView extends React.Component {
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
            }
        ).start(() => this.startAnimation())
    }

    render() {
        let {fadeAnim} = this.state;
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
        const option = {
            title: {
                text: 'LOL',
            },
            tooltip: {},
            legend: {
                data: ['熟练度']
            },
            grid: {
                containLabel: true,
                left: 0,
                right: 0
            },
            xAxis: {
                data: ["卡莎", "小鱼", "盲僧", "奥巴马", "复仇之矛", "VN"]
            },
            yAxis: {},
            series: [{
                name: '熟练度',
                type: 'bar',
                data: [18000, 20000, 19000, 21000, 19050, 22000],
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'red'
                            }, {
                                offset: 1, color: 'blue'
                            }],
                            globalCoord: false
                        }
                    },
                    emphasis: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'blue'
                            }, {
                                offset: 1, color: 'red'
                            }],
                            globalCoord: false
                        }
                    }
                },
            }]
        };
        return (
            <ImageBackground source={require('./assets/img/1111.jpg')} style={{width: width, height: height}}>
                <Header/>
                <FadeInView style={{
                    width: 250,
                    height: 50,
                    backgroundColor: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Greeting name='Proficiency'/>
                </FadeInView>
                <Echarts option={option} height={300}/>
            </ImageBackground>
        );
    }
}
