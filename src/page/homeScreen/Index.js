import React from 'react'
import {Link} from 'react-router-dom'
const Index = () => {
    return (
        <div>
            首页
            <ul>
                <li>
                    <Link to='/news'>新闻页面</Link>
                </li>
            </ul>
        </div>
    )
}

export default Index
