## React Native
##### 构建项目
###### 初始化项目
react-native init ProjectName
###### 启动 
react-native run-android  
react-native run-ios
##### 插件
###### 1. 导航
react-navigation

###### 2. 轮播
react-native-swiper

###### 3. icon
react-native-vector-icons  
import Ionicons from 'react-native-vector-icons/Ionicons'

###### 5. 路由
react-native-router-flux
###### 6. 视频
react-native-video  
###### 7. 扫码
react-native-camera  
###### 8. 渐变色块
react-native-linear-gradient

##### 组件
###### 1. 下拉刷新 上拉加载
+ FlatList
```
<FlatList
    refreshControl={this.renderRefreshControl()}
    onEndReached={this.onEndReached}
/>
```
###### 2. WebView
创建一个原生的 WebView，用于访问一个网页
```
<WebView
    source={{uri: 'https://www.baidu.com'}}
    style={{marginTop: 0}}
/>
```
###### 3. image
```js
<Image source={require('imgUrl')} />
```

###### 事件绑定
```js
//onPress()
//Text Button有onPress,若没有，将触发的元素包裹在TouchableOpacity中
 <TouchableOpacity onPress={() =>{}}>
    <Image source={require('')} />
 </TouchableOpacity>
```

##### requst(fetch)
```js
fetch('http://example.com/movies.json')
  .then((response)=> {
    return response
  })
  .catch((error)=> {
    console.log(error)
  });
```
