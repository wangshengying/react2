import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Start from './components/Start'
import About from './components/About'
import Api from './components/Api'
import Home from './container/home/Home'
import Login from './components/Login'
import './index.css'
import Content from './container/home/Content'

export default class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <Header/>
                <div className="main">
                    <div className="content" >
                        <Route path='/' exact component={Home}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/signin' component={Login}/>
                        <Route path='/topic/:id' component={Content}/>
                    </div>
                    <div className="Right" >
                        <p style={{fontSize:"14px",marginTop:"15px"}}>关于</p>
                        <br/>
                        <p style={{fontSize:"16px"}}>CNode：Node.js专业中文社区</p>
                        <br/>
                        <p>在这里你可以：</p>
                        <br/>
                        <ul>
                            <li>向别人提出你遇到的问题</li>
                            <li>帮助遇到问题的人</li>
                            <li>分享自己的知识</li>
                            <li>和其它人一起进步</li>
                        </ul>
                    </div> 
                </div>
            </div>
        </Router>
        )
    }
}