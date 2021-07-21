import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import asyncComponent from './components/asyncComponent'

//这样引入之后，webpack打包会打包到一个js文件里面,如果页面非常多的话，加载会非常的慢
//这里就要做一件事，让webpack打包的时候触发分割打包的机制，一个页面对应一个js文件，页面访问到哪个页面，浏览器给加载对应的js文件
//也叫路由懒加载
// 但是触发路由懒加载的话要写成这个样式const IndexPage =() => import('./page/homeScreen/Index')
//这样返回的是一个Promise对象，但是这样引入的话，就没办法正常引入对应的组件了，所以我们要自己写异步函数组件，实现该功能(组件写在components里面了)
// import HomeScreenIndex from './page/homeScreen/Index'
// import NewsScreenIndex from './page/newsScreen/Index'
// import NewsScreenDetails from './page/newsScreen/Details'

//这里就是用import激活webpack里面的分割打包机制（chunkFilename）,然后生成一个组件，最终还是以组价你的形式拿过来(npm run build 然后检查build文件多了几个js文件，证明分割成功)
const HomeScreenIndex = asyncComponent(() => import('./page/homeScreen/Index'))
const NewsScreenIndex = asyncComponent(() => import('./page/newsScreen/Index'))
const NewsScreenDetails = asyncComponent(() => import('./page/newsScreen/Details'))
console.log(HomeScreenIndex)

const RouterIndex = () => {
    return (
            <>
                <Router>
                    <>
                        <Route path = '/' component = {HomeScreenIndex} exact></Route>
                        <Route path = '/news' component = {NewsScreenIndex} exact></Route>
                        {/* 这样来写路由其实并不实用，因为选择的范围广的话，后面的占位符就会显得很死，每次要修改占位符的数量或者类型的话还要手动去修改 */}
                        {/* <Route path = '/news/details/:id/:title' component = {NewsScreenDetails}></Route> */}
                        {/* 上面的方式换成下面的方式 */}
                        <Route path = '/news/details' component = {NewsScreenDetails}></Route>
                        {/* 目前来看，像:id这样的占位符一般都是写在Route里面的 */}
                    </>
                </Router>
            </>
    )
}

export default RouterIndex
