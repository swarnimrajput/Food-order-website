import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       this.state={
       Userinfo:{
        name:"Swarnim Rajput",
        location:"Bhopal",
       }
       }
       console.log("Child Constructor");
    }
    async componentDidMount(){
        console.log("Child Component Did Mount");
       /**const data =await fetch("https://api.github.com/users/swarnimrajput");
       const json = await data.json();
       console.log(json)
        this.setState({
            Userinfo:json,
        })
*/
    }
    render(){
        
        const {name,location}=this.state.Userinfo;
        return(
            <div className="user-card">
                
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>contact:swarnimrajput5826@gmail.com</h4>
    
            </div>
            
        )
    }

}
export default UserClass;