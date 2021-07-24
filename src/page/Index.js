import React , {lazy , Suspense}from 'react'
// 只要是和路由相关的都做懒加载
import {Route , Switch , Redirect} from 'react-router-dom'
import GoodsIndex from '../components/GoodsIndex'
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
    // console.log('props' , props)
    


    //下面这部分也跟着封装进去了


    // const goPage = (url) =>{
    //     // console.log('url' , url)
    //     //当点击事件触发是，会使得props改变，所以会使得组件刷新，也就是console.log('url' , url)比console.log('props' , props)先一步打印的原因，然后因为组件刷新，所以下面的路由才会去重新匹配
    //     // props.history.push(url)
    //     //这样push的话就会直接修改url#变成我们这里的参数，不过push方法会使得返回的时候是一步步返回的，不能直接跳转到首页

    //     //下面这个方法确实可以实现返回首页，但返回的必须是通过Link点击跳转前的那一页
    //     props.history.replace(url)
    // }
    return (
        <>
            <div>
                {/* 这里也加入了.bind(null),只是为了防止点击之后一直执行，并没有起到强制绑定this指向的功能，因为无状态组件里面没有this这一说法，是undefind */}
                {/* 这个是返回历史记录的方法 */}
                <button type='button' onClick={props.history.go.bind(null , -1)}>返回</button>


                {/* !!!也就是这里将父组件得到的props作为值传给路由子组件 */}
                <GoodsIndex props={props}></GoodsIndex>
                {/* withRouter实现子组件路由跳转 */}
                {/* 下面这部分封装到一个新的组件里面去了 */}
                {/* <ul>
                '/goods' ,  这就是默认写search的方式
                目前这里的bind（this）理解的还不是特别透彻，但能明白应该是给回调函数强制绑定this指向到Index里面
                目前这里的bind（null）明白了，这里的bind其实真实的目的不是用来强制绑定的，而是防止点击之后函数一直执行，无状态组件里面没有this这一说法，有状态组件的this是为了强制绑定到类上
                    <li onClick={goPage.bind(null , '/goods/Item')}>商品</li>
                    <li onClick={goPage.bind(null , '/goods/details')}>详情</li>
                    <li onClick={goPage.bind(null , '/goods/evaluate')}>评价</li>
                </ul>  */}
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
