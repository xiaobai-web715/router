import React from 'react'
import GoodsIndex from '../../components/index'
import { Link , Redirect} from 'react-router-dom'

const GoodsScreen = (props) => {
    return (
        <div>
            <button type='button' onClick={props.history.go.bind(null , -1)}>返回</button><br/>
            <Link to='/goods/item'>商品页面</Link><br/>
            <Link to='/goods/details'>商品详情页面</Link><br/>
            <Link to='/goods/evaluate'>商品评价页面</Link><br/>
            <Redirect to='/goods/Item'></Redirect>
            <GoodsIndex></GoodsIndex>
        </div>
    )
}

export default GoodsScreen
