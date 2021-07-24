import React , {lazy , Suspense}from 'react'
// {lazy , Suspense};lazy,Suspense是react16.6之后触发分割打包的方法（了解其中的原理的话可以参考react-router）
import { HashRouter as Router ,Route} from 'react-router-dom'
// import Index from '../page/Index'
// 这个是子路由界面

//路由懒加载
const Index = lazy(()=>import('../page/Index'))
const Content = lazy(()=>import('../page/Content'))

const RouterFun = () => {
    return (
        <React.Fragment>
            <Router>
                <React.Fragment>
                    <Suspense fallback={<React.Fragment/>}>
                        {/* 主路由嵌套子路由的实际应用场景，最常见的就是目录切换内容，但是目录是不变的 */}
                        {/* 所以这个页面是主路由界面 */}
                        <Route path='/' exact component={Content}></Route>
                        <Route path='/goods'  component={Index}></Route>
                        {/* 注意这样的话就不能加exact了,如果加了exact(完全匹配)，路由就无法匹配到这里，首页也就无法加载，后续的内容也就显示不出来了 */}
                    </Suspense>
                </React.Fragment>
            </Router>
        </React.Fragment>
    )
}

export default RouterFun
