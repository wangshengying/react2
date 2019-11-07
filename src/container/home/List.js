import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
    constructor(){
        super();
        this.state={
            data:[],
           
        }
    }
    componentDidMount(){// 组件渲染后调用
        let path = this.props.location.search
        fetch('https://cnodejs.org/api/v1/topics'+path)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    //setState()结束之后都会自动调用componentDidUpdate()
    //如果有更新会进componentDidUpdate里面
    componentDidUpdate(Props,State){
        if(Props.location.search !== this.props.location.search){
            let path = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+path)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
        
    }
    render() { 
        var url = this.props.match.params.url;
        var ago = this.props.location.search.split('&')[0];
        var arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(this.props)
        return (
            <div>
                <div>
                    <ul>
                        {
                            this.state.data.map((item,index)=>{
                                var name = 'a'+index;
                                var name1 = '';
                                if(item.title.length>50){
                                    name1 = item.title.slice(0,50);
                                }else{
                                    name1 = item.title
                                }
                                //获取的列表中内容
                                return <div className="line" key={name}>
                                <img style={{float:"left"}} src={item.author.avatar_url} alt={item.loginname}/>
                                <div style={{float:"left",marginLeft:'8px'}}>
                                <span style={{color:"#9932CC"}} >{item.visit_count}</span>
                                <span style={{fontSize:"10px",color:"#C0C0C0"}} >{item.visit_count}</span>
                                <span style={{marginLeft:'10px',marginRight:'8px',backgroundColor:"#C0C0C0"}} >分享</span>
                                <Link className="title"to={{
                                    pathname:`/topic/${item.id}` //设置路径名称
                                }}>{name1}</Link>
                                </div>
                            </div>
                            })
                        }
                    </ul>
                </div>
                <div style={{backgroundColor:'white',height:"35px"}}>
                    <ul className="cross">
                        {
                            arr.map((item,index)=>{
                                return <li key={index}><Link to={{
                                    pathname:url,
                                    search:`${ago}&page=${item}`,//点击页数时设置上方链接变化
                                    state:200
                                }}>{item}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}