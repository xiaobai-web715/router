import React from 'react'

const UserScreen = (props) => {
    const outLogin = () => {
        localStorage.clear();
        props.history.replace('/');
    }
    return (
        <div>
            欢迎{localStorage['username']}回来!<br/>
            <button type='button' onClick={outLogin}>安全退出</button>
            {/* 需求里面的安全退出指的是清空localStorage */}
        </div>
    )
}

export default UserScreen
