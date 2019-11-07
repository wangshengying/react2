import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import List from './List'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            num:0//设置一个计数器，记录点击的对象的下标
        }
    }
    //点击对象的同时获取对象的下标
    click=(e)=>{
        this.setState({
            //获取数组下标
            num:e.target.getAttribute('data-index')
        })
    }
    render() {
        //页面的 url 信息全都包含在 this.props的match字段
        var url = this.props.match.url;//可以跳到当前的路由
        return (
            <div>
                <div className="First">
                    <Link className="change" onClick={this.click} data-index={1} to={{
                        pathname:url,//对象定位描述
                        search:'?tab=all',
                        state:200
                    }}>全部</Link>
                    <Link className="change" onClick={this.cilck} data-index={2} to={{
                        pathname:url,
                        search:'?tab=good',
                        state:200
                    }}>精华</Link>
                    <Link className="change" onClick={this.cilck} data-index={3} to={{
                        pathname:url,
                        search:'?tab=share',
                        state:200
                    }}>分享</Link>
                    <Link className="change" onClick={this.cilck} data-index={4} to={{
                        pathname:url,
                        search:'?tab=job',
                        state:200
                    }}>问答</Link>
                </div>
                {/* 引入获取的List*/}
                <div>
                    <Route path={`${url}`} component={List}/>
                </div> 
            </div> 
        )
        
    }
}