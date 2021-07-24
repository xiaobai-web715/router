import React from 'react'
import { withRouter } from 'react-router-dom'
// withRouter的作用就是把父组件的props拿进来（注意不是父组件传给子组件的，而是爷组件传给父组件的props）
//其实这里也可以用这种方法来替代，将父组件得到的props作为值传给子组件（也就是这个组件，然后解构出来，同样也可以实现该效果）
//但是要注意如果是父组件直接作为值传过来的一定要解构之后在使用

const GoodsIndex = ({props}) => {
    const goPage = (url) =>{
        // console.log('url' , url)
        
        //！！！当点击事件触发是，会使得props改变，所以会使得组件刷新，也就是console.log('url' , url)比console.log('props' , props)先一步打印的原因，然后因为组件刷新，所以下面的路由才会去重新匹配
        // props.history.push(url)
        //这样push的话就会直接修改url#变成我们这里的参数，不过push方法会使得返回的时候是一步步返回的，不能直接跳转到首页

        //下面这个方法确实可以实现返回首页，但返回的必须是通过Link点击跳转前的那一页
        props.history.replace(url)
    }
    return (
        <div>
           <ul>
                {/*'/goods' ,  这就是默认写search的方式 */}
                {/* 目前这里的bind（null）明白了，这里的bind其实真实的目的不是用来强制绑定的，而是防止点击之后函数一直执行，无状态组件里面没有this这一说法，有状态组件的this是为了强制绑定到类上 */}
                    <li onClick={goPage.bind(null , '/goods/Item')}>商品</li>
                    <li onClick={goPage.bind(null , '/goods/details')}>详情</li>
                    <li onClick={goPage.bind(null , '/goods/evaluate')}>评价</li>
                </ul>  
        </div>
    )
}

export default withRouter(GoodsIndex) 
