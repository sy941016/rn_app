import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl, StyleSheet } from 'react-native';

export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            list: []
        };
    }

    addView(item, key) {
        return (
            <View style={styles.view} key={key}>
                <Text>{item}</Text>
            </View>
        )
    }

    _onRefresh() {
        this.setState({
            refreshing: true
        });
        setTimeout(() => {
            this.state.list.push('我是哈士奇,谢谢')
            this.setState({
                list: this.state.list,
                refreshing: false
            });
        }, 1000)
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        title={'下拉刷新'}
                        refreshing={this.state.refreshing}
                        colors={['rgb(255, 176, 0)', "#ffb100"]}
                        onRefresh={() => {
                            this._onRefresh();
                        }}
                    />
                }
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <View style={styles.view}>
                    <Text>你是萨摩吗？</Text>
                </View>
                {this.state.list.map((item, key) => (this.addView(item, key)))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        width: '90%',
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
