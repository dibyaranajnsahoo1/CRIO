import { Component } from "react";



export class Uncontroedform extends Component{
    constructor(){
        super();
        this.state = {fullName:''}
    }



    handelSubmit(e){
        e.preventDefault();

    } 
    handelChange(e){
        if(e.target.value=="Dibya"){
            alert("Dibya");
            return;
        }
        this.setState({fullName:e.target.value})
    }
  render() {
    return(
    <div>
        <form onSubmit={this.handelSubmit}>
        <label>
          Name:
          <input type="text" name="name" autoComplete="off" onChange={(e)=>this.handelChange(e)} value={this.state.fullName} />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )


 }




}