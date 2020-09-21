import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

export default class FlatListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh: false,
            listData: [1]
        }
    }

    getNewData() {
        this.setState({
            refresh: true
        })
        let newData = []
        for (let i = 0; i < 1; i++) {
            newData.push('上拉数据')
        }
        setTimeout(() => {
            this.setState({
                refresh: false,
                listData: [...newData, ...this.state.listData]
            })
        }, 1500)
    }

    getData() {
        let newData = []
        for (let i = 0; i < 1; i++) {
            newData.push(i)
        }
        setTimeout(() => {
            this.setState({
                listData: [...this.state.listData, ...newData]
            })
        }, 1500)
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <FlatList
                    // 渲染的数据源
                    data={this.state.listData}

                    renderItem={(data) => {
                        return <Text style={style.item}>{data.item}</Text>
                    }}

                    // 下拉刷新数据
                    refreshing={this.state.refresh}
                    onRefresh={() => {
                        this.getNewData()
                    }}

                    // 上拉加载更多数据
                    onEndReachedThreshold={0.5}
                    onEndReached={() => this.getData()}

                    ListEmptyComponent={
                        <Text style={{ textAlign: "center", marginBottom: 10 }}>暂无数据</Text>}

                    ListFooterComponent={
                        <Text style={{ textAlign: "center", marginBottom: 10 }}>获取更多数据</Text>}
                    // 列表key值
                    keyExtractor={(item, index) => index}
                    //设置下拉加载更多的指示器的位置
                    progressViewOffset={50}
                />
            </View>
        )
    }
}
const style = StyleSheet.create({
    item: {
        backgroundColor: "green",
        marginBottom: 10,
        height: 150,
        lineHeight: 150,
        textAlign: "center"
    }
})
