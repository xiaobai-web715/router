import React , {lazy , Suspense}from 'react'
// 只要是和路由相关的都做懒加载
import {Route , Switch , Redirect} from 'react-router-dom'
// Switch:只要匹配到一个地址就不往下面匹配了，相当于for循环里面的break（做性能优化使用的）
// Redirect:重定向（重定向一定要放在路由的最下面）
// import GoodsItem from './item/GoodsItem'
// import DetailsItem from './item/DetailsItem'
// import EvaluateItem from './item/EvaluateItem'

//下面是路由懒加载
const GoodsItem = lazy(()=>import('./item/GoodsItem'))
const DetailsItem = lazy(()=>import('./item/DetailsItem'))
const EvaluateItem = lazy(()=>import('./item/EvaluateItem'))

const Index = (props) => {
    console.log('props' , props)
    const goPage = (url) =>{
        // console.log('url' , url)
        //当点击事件触发是，会使得props改变，所以会使得组件刷新，也就是console.log('url' , url)比console.log('props' , props)先一步打印的原因，然后因为组件刷新，所以下面的路由才会去重新匹配
        // props.history.push(url)
        //这样push的话就会直接修改url#变成我们这里的参数，不过push方法会使得返回的时候是一步步返回的，不能直接跳转到首页

        //下面这个方法确实可以实现返回首页，但返回的必须是通过Link点击跳转前的那一页
        props.history.replace(url)
    }
    return (
        <>
            <div>
                {/* 这里也加入了.bind(this),也是强制绑定了this指向Index,如果不写.bind(this)，功能就会出现问题，但目前还不清楚为啥会出现这样的问题 */}
                {/* 这个是返回历史记录的方法 */}
                <button type='button' onClick={props.history.go.bind(this , -1)}>返回</button>
            <ul>
            {/*'/goods' ,  这就是默认写search的方式 */}
            {/* 目前这里的bind（this）理解的还不是特别透彻，但能明白应该是给回调函数强制绑定this指向到Index里面 */}
                <li onClick={goPage.bind(this , '/goods/Item')}>商品</li>
                <li onClick={goPage.bind(this , '/goods/details')}>详情</li>
                <li onClick={goPage.bind(this , '/goods/evaluate')}>评价</li>
                </ul> 
            </div>
            <div>
                <Switch>
                    <Suspense fallback={<></>}>
                        <Route path = '/goods/Item' component={GoodsItem}></Route>
                        {/* 只要逻辑上的最外层有Router就可以，所以这里没有像首页一样加上Router */}
                        <Route path = '/goods/details' component={DetailsItem}></Route>
                        <Route path = '/goods/evaluate' component={EvaluateItem}></Route>

                        {/* 这个重定向可以理解是当加载这个组件的时候，默认显示的内容是该路径指向的内容 */}
                        <Redirect to='/goods/Item'></Redirect>
                    </Suspense>
                </Switch>
            </div>
        </>
    )
}

export default Index
