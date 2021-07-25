import React , {useState , useEffect} from 'react'

const LoginScreen = (props) => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const funUsername = e =>{
        setUsername(e.target.value)
    }
    const funPassword = e =>{
        setPassword(e.target.value)
    }
    useEffect(()=>{
        console.log('我只是在挂载的时候执行了')
    },[])
    const funDengLu = () =>{
        // console.log('我tm竟然一直在登陆')
        if(username.match(/^\s*$/)){
            alert('请输入用户名')
            return;
        }
        if(password.match(/^\s*$/)){
            alert('请输入密码')
            return;
        }
        // 如果登录成功的话,就可以将信息存储到localStroge(本地存储里面)
        //上面两个条件只要有一个不通过，就不可能执行下面这两句话，因为里面有return
        localStorage['username'] = username;
        localStorage['isLogin'] = true;
        //易班登录成功之后就是返回上一个页面
        props.history.go(-1)
    }
    return (
        <div>
            用户名:<input type='text' placeholder='请输入用户名' onChange={funUsername}></input><br/>
            密码:<input type='text' placeholder='请输入密码' onChange={funPassword}></input><br/>
            <button type='button' onClick={funDengLu}>登录</button>
        </div>
    )
}

export default LoginScreen
