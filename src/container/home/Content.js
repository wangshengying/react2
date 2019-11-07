import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    // 加载外部数据用componentDidMount
    componentDidMount(){
        let path = this.props.match.params.id
        fetch(`https://cnodejs.org/api/v1/topic/${path}`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
//setState()结束之后都会自动调用componentDidUpdate()
//如果有更新会进componentDidUpdate里面
    componentDidUpdate(Props,State){
        if(Props.location.search !== this.props.location.search){
            let path = this.props.match.params.id
            console.log('path',path)
            fetch( `https://cnodejs.org/api/v1/topic/${path}`)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
        
    }
    render() {
        console.log(this.state.data)
        return (
            <div style={{backgroundColor:"white"}} dangerouslySetInnerHTML = {{ __html:this.state.data.content }}></div>
            // 通过dangerouslySetInnerHTML将内容写入__html对象中，使它可以正常显示
        )
    }
}
