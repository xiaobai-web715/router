import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div>
            <p>首页</p>
            <Link to='/goods'>商品</Link><br/>
            <Link to='/login'>会员登录</Link><br/>
            <Link to='/user'>会员中心</Link><br/>
        </div>
    )
}

export default HomeScreen
