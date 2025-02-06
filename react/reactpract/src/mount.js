import { Component } from "react";


export class Mount extends Component{
    constructor(props){
        super(props);
        this.state = {email:""}
    }

    async fetchEmail(){
        const res = await fetch("https://reqres.in/api/users/1");
        const data = await res.json();
        this.setState({email:data.data.email})
    }
    componentDidMount(){
        this.fetchEmail();
    }

    render(){
        return(
            <div>
                <h1>Mount</h1>
                <p>Email : {this.state.email ? this.state.email : "Loading......"}</p>
            
            </div>
        )
           


        

    }



}




                // {/* <input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/> */}