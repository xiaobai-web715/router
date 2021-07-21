import React , { useEffect } from 'react'
import {localParam} from '../../tools/Index'

// const Details = ({match}) => {
const Details = (props) => {
    // props就是从父组件传递过来的
    console.log("props" , props)
    // console.log("id:" + match.params.id + '  title:' + match.params.title)
    //因为前面修改了路由匹配的样式，所以这要去测试的话，就要变回之前的路由
    

    //修改成后一种形式的路由之后传进来的参数是放置在了props.location之中
    // console.log("id:" + props.location.query.id + '  title:' + props.location.query.title)
    console.log("props.location" , props.location)

    // localParam()是tools文件夹里面的index.js导出的函数，会返回一个对象，对象里面有两属性search和hash，两个又都是个对象，可以
    useEffect(() => {
        console.log('是我哦' , localParam(props.location.search).search)
        console.log('id是我哦!' , localParam(props.location.search).search.id)
        //这个是未转码的title
        console.log('未转码title是我哦!' , localParam(props.location.search).search.title)
        console.log('title是我哦!' , decodeURIComponent(localParam(props.location.search).search.title))
        // decodeURIComponent()是转码的方式
    })
    // 这样就拿到了通过通过点击事件拿到了props.history.push()进来的query的对象了
    return (
        <>
            <div>
                ID:{localParam(props.location.search).search.id},标题:{decodeURIComponent(localParam(props.location.search).search.title)}
            </div>
            <button type='button' onClick={()=>{props.history.go(-1)}}>返回</button>
        </>
    )
}

export default Details
