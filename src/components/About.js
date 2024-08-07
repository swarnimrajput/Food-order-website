import User from "./Users";
import UserClass from "./UserClass";
import { Component } from "react"; 
import Usercontext from "../utils/Usercontext";
class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <Usercontext.Consumer>
                        {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </Usercontext.Consumer>
                </div>
                <h2>This is About Us page</h2>
                <User name={"Swarnim Rajput"}/>
                <UserClass name={"Swarnim Rajput(CLass)"} location={"Bhopal"} />
            </div>
        )
    }
   
}
export default About;