import React,{ Component } from "react";


export default class Me extends Component{
    constructor(props){
        super();
        this.state={
            counter:0,

        }
    }
    add =()=>{
     this.setState({counter:this.state.counter+1})
    }
    minus =()=>{
      this.setState({counter:this.state.counter-1})
     }
    res =()=>{
      this.setState({counter:this.state.counter=0})
     }
    
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.src}/>
                <p>{this.state.counter}</p>
                <p>{this.state.count}</p>
                <button onClick={()=>this.add()}>Like</button>
                <button onClick={()=>this.minus()}>Dislike</button>
                <button onClick={()=>this.res()}>Resete</button>
            </div>
        )
    }
}