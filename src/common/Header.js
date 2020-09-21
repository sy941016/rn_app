import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    sousuo() {
        this.setState((previousState) => {
            return ({
                show: !previousState.show,
            })
        });
    }

    render() {
        let v = this.state.show ? <TextInput style={header.input} placeholder={'输入查询'} /> : null;
        return (
            <View style={header.view}>
                <TouchableOpacity onPress={() => this.sousuo()}>
                    <Image source={require('../assets/img/sousuo.png')} style={header.img} />
                </TouchableOpacity>
                <Text style={{ marginLeft: '25%' }}>React Native App</Text>
                {v}
            </View>
        )
    }
}

const header = StyleSheet.create({
    view: {
        width: '100%',
        height: 40,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        position: 'relative'
    },
    img: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        width: 250,
        position: 'absolute',
        top: 0,
        left: 50,
        backgroundColor: 'red'
    }
})
