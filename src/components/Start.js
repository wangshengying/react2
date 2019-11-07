import React from 'react'
import {Link} from 'react-router-dom'

export default function Start(){
    return (
        <div className="Start">
            <div className="First">
                <Link to={{
                            pathname:'/',
                            search:'?tab=all',
                            state:200
                        }}>主页</Link><span style={{color:"#999",fontSize:"14px"}}>/ Nodejs 新手入门</span>
            </div>
            <div className="all">
                <div className="have">
                    <div className="one">
                        <h2>Node.js 入门</h2>
                        <hr/>
                        <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
                        <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                        <p>《Node.js 包教不包会》</p>
                        <p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
                        <p>《ECMAScript 6入门》</p>
                        <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
                        <p>《七天学会NodeJS》</p>
                        <p style={{marginBottom:"20px"}}><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
                        <h2>Node.js 资源</h2>
                        <hr/>
                        <p>《前端资源教程》</p>
                        <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
                        <p>《国内的 npm 镜像源》</p>
                        <p><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></p>
                        <p>《node weekly》</p>
                        <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
                        <p>《node123-<em>node.js中文资料导航</em>》</p>
                        <p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
                        <p>《A curated list of delightful Node.js packages and resources》</p>
                        <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
                        <p>《Node.js Books》</p>
                        <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
                        <h2 style={{marginBottom:"20px"}}>Node.js 名人</h2>
                        <hr/>
                        <p>《名人堂》</p>
                        <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
                        <h2>Node.js 服务器</h2>
                        <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}