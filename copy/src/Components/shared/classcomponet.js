import axios from "axios";
import React from "react";
import { json } from "react-router-dom";

 class Classcomponent extends React.Component{
   
    constructor(){
        super();
        this.state={
            randomNumber:0,
            user:null,
        };
    }
    incount=async ()=>{
        // this.setState({count:this.state.count + 1});
        this.setState(
            {randomNumber:Math.floor(Math.random()*82 +1)},
            async()=>{
                const res=await axios.get(`https://swapi.dev/api/pepole/${this.state.randomNumber}`);

                console.log(res);
            }
        );
    };

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((json)=>this.setState({user:json}));
    }

    render(){
        return (
            <div>
                <p>{this.state.randomNumber}</p>
                <button className="btn btn-danger" onClick={this.incount}>Increse Count</button>
                <p><table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.user&& this.state.user.map((user,i)=>(
            <tr key={i+1}>
            <th scope="row">{i+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>

        ))
    }
  </tbody>
 </table>
 </p>
 </div>
        );
    };
};

export default Classcomponent;