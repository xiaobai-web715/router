import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>
            <p>首页</p>
            {/* 这样写就可以在点击的时候直接跳转到goods底下的Item页面,前面的/goods这个路由也可以正常匹配到(因为使用了模糊匹配)，使得页面正常加载 */}
            {/* <Link to='/goods/Item'>商品</Link> */}

            {/* 也可以不像上面这样修改，而是去修改路由界面，使用重定向原则Redirect */}
            <Link to='/goods'>商品</Link>
        </div>
    )
}

export default Content
