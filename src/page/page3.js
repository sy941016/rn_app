import React, {Component} from 'react'
import {View, Text, StyleSheet, Animated, Easing} from 'react-native'
import {RNCamera} from 'react-native-camera'

export default class page3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: 200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };
    //  识别二维码
    onBarCodeRead = (e) => {
        const navigate = this.props.navigation;
        //路由跳转到webView页面
        // navigate('page1', {
        //     url: e
        // })
        this.setState({
            transCode: e.data,
            type: e.type,
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}//指定相机的闪光模式
                    onBarCodeRead={this.onBarCodeRead} //检测到条形码时，将调用指定的方法
                >
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle}>
                            <Animated.View style={[
                                styles.border,
                                {transform: [{translateY: this.state.moveAnim}]}]}/>
                        </View>
                        <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                        <Text>{this.state.transCode}</Text>
                        <Text>{this.state.type}</Text>
                    </View>
                </RNCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent',
        position:'relative'
    },
    rectangleText: {
        color: '#fff',
        marginTop: 10
    },
    border: {
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
        position: 'absolute',
        top:0,
        left:0
    }
});
