import { Component } from "react";

export class Stock extends Component{


    componentDidMount(){
        this.timer = setInterval(()=>{

        }, 2000)


    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }


    render(){
        return(
            <div>
                <h1>Stock</h1>
            </div>

        )
    }
}