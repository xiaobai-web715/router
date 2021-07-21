import React from 'react'
import {Link} from 'react-router-dom'

const Index = (props) => {
    console.log(props)
    return (
        <div>
            新闻页面
            <ul>
                <li onClick = {() => {
                    //箭头函数的this默认指向当前作用域上下文，也就是Index，所以可以找到props
                    props.history.push({
                        pathname : '/news/details', //这个就是咱们要访问的页面(也就是前面要匹配到的路由)
                        // search:'?id = 1&titile = 新闻详情页1',
                        query : {  //传参的
                            id : 1,
                            title : '新闻详情页1'
                        }
                        //！！！！！但是这样来写也会出现一个问题，当我刷新页面的时候会显示id not defined(这是react的问题，没有办法，所以最终的解决方案就是自定义一个函数)
                    })
                    // 当点击之后，会匹配到pathname对应的路由，然后加载子组件，同时会传props进去
                }}>
                    {/* Link里面不能出现占位符，应该是真实的字段，然后点击的时候会匹配到Route里面， id：1和title:新闻详情页1会通过Props传递给子组件，也就是router.js文件里面的Route匹配到的组件，id和title会被存在match底下的params，你也可以通过打印Details.js里面的props查看*/}
                    {/* <Link to='news/details/1/新闻详情页1'>新闻详情页1</Link> */}
                    新闻详情页1
                </li>
                <li>
                    <Link to>新闻详情页2</Link>
                </li>
            </ul>
        </div>
    )
}

export default Index
