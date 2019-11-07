import React  from 'react'
import {Link} from 'react-router-dom'
export default function Login(){
    return (
        <div className="Login">
            <div className="First">
                <Link to={{
                    pathname:'/',
                    search:'?tab=all',
                    state:200}}>主页
                </Link><span style={{color:"#999",fontSize:"14px"}}>/ 登陆</span>
            </div>
            <div className="all">
                <div className="one">
                    <div class="have">
                        <div className="login1">
                            <label htmlFor="name">用户名</label>
                            <input id="username" name="username" size="30" type="text"/>
                        </div>
                        <div className="login1">
                            <label for="password">密&nbsp;码&nbsp;</label>
                            <input id="password" name="password" size="30" type="password"/>
                        </div>
                        <div className="login2">
                        <Link to={{
                            pathname:'/',
                            search:'?tab=all',
                            state:200
                        }}>登陆</Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}