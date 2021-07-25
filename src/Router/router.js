import React , {lazy , Suspense} from 'react'
import {HashRouter as Router , Route} from 'react-router-dom'
import {AuthRoute} from '../routes/Private'
const HomeScreen = lazy(() => import('../page/HomeScreen'))
const GoodsScreen = lazy(() => import('../page/Goods/GoodsScreen'))
const LoginScreen = lazy(() => import('../page/login/Index'))
const UserScreen = lazy(() => import('../page/User/Index'))

const RouterFun = () => {
    return (
        <div>
            <Router>
                <Suspense fallback={<React.Fragment></React.Fragment>}>
                    <Route path='/' component={HomeScreen} exact></Route>
                    <Route path='/goods' component={GoodsScreen}></Route>
                    <Route path='/login' component={LoginScreen}></Route>
                    {/* 这里是官网给出的一个方法,解决安全退出之后还是可以进入会员中心的问题（也可以防止直接通过链接直接进入会员中心） */}
                    <AuthRoute path='/user' component={UserScreen}></AuthRoute>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterFun
