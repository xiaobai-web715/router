import React , { useState , useEffect , Component} from 'react'
import { render } from 'react-dom/cjs/react-dom.development';


export default function asyncComponent(importComponent){
// importComponent传进来一个组件
    function AsyncComponent(props){
        // 父组件传进来的props
        // console.log('函数组件的' , props)
        const[component , setComponent] = useState({})
        //初始化不能设置成null，会出错，并且很奇怪，赋值进去的和提取出来的不一样
        // component初始化成一个对象的形式，用来存入const{default : targteComponent} = await importComponent();这里面面的targteComponent
        useEffect(()=>{
        //这里和类组件有所不同，写async函数时要写成匿名函数表达式的样子，然后componentDidMount()执行一下
            const componentDidMount = async() => {
                //await importComponent()生成一个Promise对象，然后直接拿出来了，应该就是就是给了这里面的async await使得异步变成同步的执行顺序，使得setComponent(component)里面的值是执行之后的组件（这样就防止写回调函数了）
                // {default : targteComponent}这个方案是解构赋值的意思，解构出default，给他一个别名叫targteComponent你可以理解为与as同一作用（这个别名就是防止关键词起冲突用的）
                const{default : targteComponent} = await importComponent();
                console.log('await importComponent()' , await importComponent())
                console.log('targteComponent' , targteComponent)
                setComponent({target : targteComponent})
            }
            componentDidMount()
        },[])//useEffect没有第二个参数的时候，组件初始化和更新都会执行
        const C = component.target
        return  C?<C{...props}/>:null
    }
    return AsyncComponent
}


//下面是类组件的方式
// export default function asyncComponent(importComponent){//传过来一个函数
//      class AsyncComponent extends Component {
//         constructor ( props ) {
//             super ( props );
//             this.state={
//                 component:null
//             };
//         };
//         async componentDidMount(){
//             const{default : component} = await importComponent();
//             console.log('await importComponent()' , await importComponent())\
//             console.log('component' , component)
//             this.setState({
//                 component : component
//             })
//         }
//         render () {
//             const C =this.state.component;
//             return C?<C{...this.props}/>:null;
//         };
//     };
//     return AsyncComponent;
// }