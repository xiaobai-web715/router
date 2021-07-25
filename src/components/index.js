import React , {lazy , Suspense} from 'react'
import {Route} from 'react-router-dom'
const Item = lazy(() => import('../page/Goods/content/Item'))
const Details = lazy(() => import('../page/Goods/content/Details'))
const Evaluate = lazy(() => import('../page/Goods/content/Evaluate'))

const GoodsIndex = () => {
    return (
        <div>
            <Suspense>
                <Route path='/goods/item' component={Item}></Route>
                <Route path='/goods/details' component={Details}></Route>
                <Route path='/goods/evaluate' component={Evaluate}></Route>
            </Suspense>
        </div>
    )
}

export default GoodsIndex
