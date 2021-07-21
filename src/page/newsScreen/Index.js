import React from 'react'
// import {Link} from 'react-router-dom'

const Index = (props) => {
    // console.log(props)
    return (
        <div>
            新闻页面
            <ul>
            {/* <button type='button' onClick={()=>{props.history.go(-1)}}>返回</button> */}
                <li onClick = {() => {
                    //箭头函数的this默认指向当前作用域上下文，也就是Index，所以可以找到props
                    props.history.push({
                        pathname : '/news/details', //这个就是咱们要访问的页面(也就是前面要匹配到的路由)
                        search:"?id=1&title=新闻详情页1",
                        // search:"?id=1&titile=新闻详情页1",这里有个坑，不要加空格，如果加的话浏览器上的url转码后会给你把空格编译成%20
                        query : {  //传参的(目前还不知道这个query是来干嘛的，后面匹配的都是前面的search里面的内容)
                            id : 1,
                            title : '新闻详情页1'
                        }
                        //！！！！！但是这样来写也会出现一个问题，当我刷新页面的时候会显示id not defined(这是react的问题，没有办法，所以最终的解决方案就是自定义一个函数)
                    })
                    // 当点击之后，会匹配到pathname对应的路由，然后加载子组件，同时会传props进去(上面的部分写入到location里面，并且也会跟随props传入到子组件当中)
                }}>
                    {/* Link里面不能出现占位符，应该是真实的字段，然后点击的时候会匹配到Route里面， id：1和title:新闻详情页1会通过Props传递给子组件，也就是router.js文件里面的Route匹配到的组件，id和title会被存在match底下的params，你也可以通过打印Details.js里面的props查看*/}
                    {/* <Link to='news/details/1/新闻详情页1'>新闻详情页1</Link> */}
                    新闻详情页1
                </li>
                {/* 上面的push方式非常的麻烦去写入push里面的search之类的 ， 所以下面的新闻详情页2通过更好的方式来写入作比较 */}
                <li onClick = {() => {
                    props.history.push("/news/details?id=2&title=新闻详情2")
                    // 我感觉这就是默认写search的方式,企业级开发的话，这里应该会是一个动态插入值的方式，而不是一个固定的值
                }}>
                    新闻详情页2
                </li>
            </ul>
        </div>
    )
}

export default Index
