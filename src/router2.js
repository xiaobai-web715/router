import React , {lazy , Suspense}from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

//这个是16.6版本之后react引入的懒加载方法
const HomeScreenIndex = lazy(() => import('./page/homeScreen/Index'))
const NewsScreenIndex = lazy(() => import('./page/newsScreen/Index'))
const NewsScreenDetails = lazy(() => import('./page/newsScreen/Details'))

const RouterIndex = () => {
    return (
            <>
                <Router>
                    <Suspense fallback={<div></div>}>
                        <Route path = '/' component = {HomeScreenIndex} exact></Route>
                        <Route path = '/news' component = {NewsScreenIndex} exact></Route>
                        {/* 这样来写路由其实并不实用，因为选择的范围广的话，后面的占位符就会显得很死，每次要修改占位符的数量或者类型的话还要手动去修改 */}
                        {/* <Route path = '/news/details/:id/:title' component = {NewsScreenDetails}></Route> */}
                        {/* 上面的方式换成下面的方式 */}
                        <Route path = '/news/details' component = {NewsScreenDetails}></Route>
                        {/* 目前来看，像:id这样的占位符一般都是写在Route里面的 */}
                    </Suspense>
                </Router>
            </>
    )
}

export default RouterIndex
