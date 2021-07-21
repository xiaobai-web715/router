import React from 'react'


// const Details = ({match}) => {
const Details = (props) => {
    // props就是从父组件传递过来的
    console.log("props" , props)
    // console.log("id:" + match.params.id + '  title:' + match.params.title)
    //因为前面修改了路由匹配的样式，所以这要去测试的话，就要变回之前的路由
    

    //修改成后一种形式的路由之后传进来的参数是放置在了props.location之中
    console.log("id:" + props.location.query.id + '  title:' + props.location.query.title)
    // 这样就拿到了通过通过点击事件拿到了props.history.push()进来的query的对象了
    return (
        <div>
            新闻详情页面
        </div>
    )
}

export default Details
