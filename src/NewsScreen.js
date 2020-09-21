import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';

import Header from './common/Header'

export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeType: 'aa',
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'cover',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
        };
    }

    //加载媒体并准备播放时调用的回调函数
    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };
    //视频播放过程中每个间隔进度单位调用的回调函数
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };
    //视频播放结束时的回调函数
    onEnd = () => {
        this.setState({ paused: true });
        //seek(定位)到由秒表示的指定位置
        this.video.seek(0)
    };
    //音频变得嘈杂时的回调 - 应暂停视频
    onAudioBecomingNoisy = () => {
        this.setState({ paused: true })
    };
    //音频焦点丢失时的回调 - 如果焦点丢失则暂停
    onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
        this.setState({ paused: !event.hasAudioFocus })
    };

    //进度条函数
    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    };

    //播放速率
    renderRateControl(rate) {
        const isSelected = (this.state.rate === rate);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({ rate })
            }}>
                <Text style={[styles.controlOption, { color: isSelected ? 'red' : '#fff' }]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        );
    }

    //视频填充方式
    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode === resizeMode);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({ resizeMode })
            }}>
                <Text style={[styles.controlOption, { color: isSelected ? 'red' : '#fff' }]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    //音量
    renderVolumeControl(volume) {
        const isSelected = (this.state.volume === volume);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({ volume })
            }}>
                <Text style={[styles.controlOption, { color: isSelected ? 'red' : '#fff' }]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }

    //选项卡头部
    chooseTab(e) {
        if (e != this.state.changeType) {
            this.setState({
                changeType: e
            })
        }
    }

    //选项卡内容切换
    contentTab() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        if (this.state.changeType == 'aa') {
            let show = this.state.paused ? <Image source={require('./assets/img/play.png')} style={styles.button} /> : null
            return (
                <View style={styles.tab}>
                    <TouchableOpacity onPress={() => this.setState({ paused: true })} style={styles.fullScreen}>
                        <Video
                            //将组件Video作为参数赋值给了this.video
                            ref={(ref) => {
                                this.video = ref
                            }}
                            source={require('./assets/video/iceage4.mp4')}//设置视频源
                            //audioOnly={true}
                            // poster={'url'}  //视频封面,audioOnly需设为true
                            // posterResizeMode={'cover'}     //封面大小
                            style={styles.fullScreen}  //组件样式
                            rate={this.state.rate}     //播放速率
                            paused={this.state.paused}  //暂停
                            volume={this.state.volume}  //调节音量
                            muted={this.state.muted}    //控制音频是否静音
                            resizeMode={this.state.resizeMode} //缩放模式
                            onLoad={this.onLoad} //加载媒体并准备播放时调用的回调函数
                            onProgress={this.onProgress} //视频播放过程中每个间隔进度单位调用的回调函数
                            onEnd={this.onEnd} //视频播放结束时的回调函数
                            onAudioBecomingNoisy={this.onAudioBecomingNoisy} //音频变得嘈杂时的回调 - 应暂停视频
                            onAudioFocusChanged={this.onAudioFocusChanged}  //音频焦点丢失时的回调 - 如果焦点丢失则暂停
                            repeat={false} //确定在到达结尾时是否重复播放视频
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ paused: false })}>
                        {show}
                    </TouchableOpacity>
                    <View style={styles.controls}>
                        <View style={styles.generalControls}>
                            <View style={styles.rateControl}>
                                {this.renderRateControl(0.25)}
                                {this.renderRateControl(0.5)}
                                {this.renderRateControl(1.0)}
                                {this.renderRateControl(1.5)}
                                {this.renderRateControl(2.0)}
                            </View>

                            <View style={styles.volumeControl}>
                                {this.renderVolumeControl(0.5)}
                                {this.renderVolumeControl(1)}
                                {this.renderVolumeControl(1.5)}
                            </View>

                            <View style={styles.resizeModeControl}>
                                {this.renderResizeModeControl('cover')}
                                {this.renderResizeModeControl('contain')}
                                {this.renderResizeModeControl('stretch')}
                            </View>
                        </View>
                        <View style={styles.progress}>
                            <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                            <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
                        </View>
                    </View>
                </View>
            )
        } else if (this.state.changeType == 'bb') {
            return (
                <View style={styles.tab}>
                    <Text style={styles.text}>我是萨摩B</Text>
                </View>
            )
        } else if (this.state.changeType == 'cc') {
            return (
                <View style={styles.tab}>
                    <Text style={styles.text}>我是萨摩C</Text>
                </View>
            )
        } else if (this.state.changeType == 'dd') {
            return (
                <View style={styles.tab}>
                    <Text style={styles.text}>我是萨摩D</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                    <View style={styles.view}>
                        <TouchableOpacity
                            style={[styles.childView, this.state.changeType === 'aa' ? styles.border : '']}
                            onPress={() => {
                                this.chooseTab("aa")
                            }}>
                            <Text style={styles.text}>萨摩A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.childView, this.state.changeType === 'bb' ? styles.border : '']}
                            onPress={() => {
                                this.chooseTab("bb")
                            }}>
                            <Text style={styles.text}>萨摩B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.childView, this.state.changeType === 'cc' ? styles.border : '']}
                            onPress={() => {
                                this.chooseTab("cc")
                            }}>
                            <Text style={styles.text}>萨摩C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.childView, this.state.changeType === 'dd' ? styles.border : '']}
                            onPress={() => {
                                this.chooseTab("dd")
                            }}>
                            <Text style={styles.text}>萨摩D</Text>
                        </TouchableOpacity>
                    </View>
                    {this.contentTab()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    childView: {
        width: '25%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        borderBottomWidth: 2,
        borderColor: 'red'
    },
    //选项卡样式
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
        color: '#fff'
    },

    //video
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    //播放 暂停按钮
    playView: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 60,
        height: 60
    },
    //进度条
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C',
    },
    //音量 速率 填充方式
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //文字样式
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    }
})
