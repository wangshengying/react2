import React  from 'react'
import {Link} from 'react-router-dom'
import { NONAME } from 'dns'
export default function Api(){
    return (
        <div className="Api">
            <div className="First">
                <Link to={{
                            pathname:'/',
                            search:'?tab=all',
                            state:200
                        }}>主页</Link><span style={{color:"#999",fontSize:"14px"}}>/ API</span>
            </div>
            <div className="all">
                <p>以下 api 路径均以<a style={{textDecoration:"none",fontWeight:"bolder"}}href="https://cnodejs.org/api/v1" target="_blank">https://cnodejs.org/api/v1</a>为前缀</p>
                <br/>
                <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
                <br/>
                <h1>主题</h1>
                <br/>
                <h3>get /topics 主题首页</h3>
                <br/>
                <p>接收 get 参数</p>
                <br/>
                <ul className="ul1">
                    <li>page&nbsp;&nbsp;Number&nbsp;&nbsp;页数</li>
                    <li>tab&nbsp;&nbsp;String&nbsp;&nbsp;主题分类。目前有&nbsp;&nbsp;ask&nbsp;&nbsp;share&nbsp;&nbsp;job&nbsp;&nbsp;good</li>
                    <li>limit&nbsp;&nbsp;Number&nbsp;&nbsp;每一页的主题数量</li>
                    <li>mdrender&nbsp;&nbsp;String&nbsp;&nbsp;当为&nbsp;&nbsp;false&nbsp;&nbsp;时，不渲染。默认为 true，渲染出现的所有&nbsp;&nbsp;markdown&nbsp;&nbsp;格式文本。</li>
                </ul>
                <br/>
                <p>示例:<a style={{textDecoration:"none"}} href="/api/v1/topics" target="_blank">/api/v1/topics</a></p>
                <br/>
                <h3>get /topic/:id 主题详情</h3>
                <br/>
                <p>接收 get 参数</p>
                <br/>
                <ul className="ul1">
                    <li>mdrender&nbsp;&nbsp;String&nbsp;&nbsp;当为&nbsp;&nbsp;false&nbsp;&nbsp;时，不渲染。默认为 true，渲染出现的所有&nbsp;&nbsp;markdown&nbsp;&nbsp;格式文本。</li>
                    <li>accesstoken String&nbsp;&nbsp;当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的&nbsp;&nbsp;is_collect&nbsp;&nbsp;以及&nbsp;&nbsp;replies&nbsp;&nbsp;列表中的&nbsp;&nbsp;is_uped 值。</li>
                </ul>
                <br/>
                <p>示例:<a style={{textDecoration:"none"}} href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                <br/>
                <h1>主题收藏</h1>
                <br/>
                <h3>post /topic_collect/collect 收藏主题</h3>
                <br/>
                <br/>
                <p>接收 post 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken&nbsp;String&nbsp;用户的&nbsp;accessToken</li>
                    <li>topic_id String&nbsp;主题的id</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray">"success":true</p>
                <br/>
                <h3>post /topic_collect/de_collect 取消主题</h3>
                <br/>
                <br/>
                <p>接收 post 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken&nbsp;String&nbsp;用户的&nbsp;accessToken</li>
                    <li>topic_id String&nbsp;主题的id</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray">"success":true</p>
                <br/>
                <h3>get /topic_collect/:loginname 用户所收藏的主题</h3>
                <br/>
                <p>示例:<a style={{textDecoration:"none"}} href="/api/v1/topic_collect/alsotang" target="_blank">/api/v1/topic_collect/alsotang</a></p>
                <br/>
                <h1>用户</h1>
                <br/>
                <h3>get /user/:loginname 用户详情</h3>
                <br/>
                <p>示例:<a style={{textDecoration:"none"}} href="/api/v1/user/alsotang" target="_blank">/api/v1/user/alsotang</a></p>
                <br/>
                <h3>post /accesstoken 验证 accessToken 的正确性</h3>
                <br/>
                <p>接收 post 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken String 用户的 accessToken</li>
                </ul>
                <br/>
                <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray">success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url</p>
                <br/>
                <h1>消息通知</h1>
                <br/>
                <h3>get /message/count 获取未读消息数</h3>
                <br/>
                <p>接收 get 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken String</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray">data: 3 </p>
                <br/>
                <h3>get /messages 获取已读和未读消息</h3>
                <br/>
                <p>接收 get 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken String</li>
                    <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <h3>post /message/mark_all 标记全部已读</h3>
                <br/>
                <p>接收 post 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken String</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray" style={{paddingLeft:"20px"}}>success:true <br/>marked_msgs: [  id: '544ce385aeaeb5931556c6f9'  ] </p>
                <br/>
                <h3>post /message/mark_one/:msg_id 标记单个消息为已读</h3>
                <br/>
                <p>请求示例：<a style={{textDecoration:"none"}}href="/message/mark_one/58ec7d39da8344a81eee0c14">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
                <br/>
                <p>接收 post 参数</p>
                <br/>
                <ul className="ul1">
                    <li>accesstoken String</li>
                </ul>
                <br/>
                <p>返回值示例</p>
                <br/>
                <p className="gray" style={{paddingLeft:"20px"}}>success:true <br/>marked_msg_id: "58ec7d39da8344a81eee0c14"</p>
                <br/>
                <h1>知识点</h1>
                <br/>
            </div> 
        </div>
    )
}