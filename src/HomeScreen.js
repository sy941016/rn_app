import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';  //轮播

import Header from './common/Header'

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            tabList: [
                {
                    name: '我是萨摩',
                    to: 'page1'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
                {
                    name: '我是萨摩',
                    to: 'page3'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
                {
                    name: '我是萨摩',
                    to: 'page2'
                },
            ],
            bannerInfo: [
                {
                    mes: '我是萨摩',
                },
                {
                    mes: '我是萨摩',
                },
                {
                    mes: '我是萨摩',
                },
                {
                    mes: '我是萨摩',
                },
            ]
        };
    }

    addTab(item, key) {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => navigate(`${item.to}`)} style={styles.view} key={key}>
                <View style={styles.imgBox}><Image source={require('./assets/img/1111.jpg')}
                    style={styles.image} /></View>
                <Text style={{ fontSize: 14 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    addBanner(item, key) {
        return (
            <View style={styles.wrapper} key={key}>
                <Image source={require('./assets/img/1111.jpg')} style={{ width: '100%', height: '100%' }} />
                <View style={styles.textView}>
                    <Text style={styles.text}>{item.mes}</Text>
                </View>
            </View>
        )
    }

    // 轮播图
    renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper
                    height={'100%'}
                    showsButtons={false}
                    removeClippedSubviews={false} //解决白屏问题
                    autoplay={true}
                    horizontal={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    {this.state.bannerInfo.map((item, index) => (this.addBanner(item, index)))}
                </Swiper>
            );
        } else {
            return (
                <View style={styles.wrapper}>
                    <Image source={require('./assets/img/1111.jpg')} />
                </View>
            );
        }
    }

    //轮播切换  放在dom渲染完的生命周期里
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
            });
        }, 1000)
    }

    render() {
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    {this.renderBanner()}
                </View>
                <View style={styles.list}>
                    {this.state.tabList.map((item, key) => (this.addTab(item, key)))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 轮播样式
    container: {
        height: width * 40 / 75,
    },
    wrapper: {
        width: width,
        height: '100%',
    },
    paginationStyle: {
        bottom: 9,
        left: null,
        right: 10
    },
    dotStyle: {
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 8,
    },
    activeDotStyle: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: 8,
    },
    textView: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#000',
        opacity: 0.5,
        bottom: 30,
        left: 0,
        paddingLeft: 20
    },
    text: {
        color: '#fff',
        fontSize: 16
    },
    //列表样式
    list: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '3%'
    },
    imgBox: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'red'
    },
    image: {
        height: 40,
        width: 40,
    },
    view: {
        width: '25%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#000',
        marginTop: 10
    }
});
