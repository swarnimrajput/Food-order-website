import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/Appstore"
import { BrowserRouter } from "react-router-dom";
import{screen} from "@testing-library/react"
import "@testing-library/jest-dom"

it("it should show Header component with a login button",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    
    )
    const loginbutton = screen.getByText("Login");
    const loginbutton2 = screen.getByRole("button",{name:"Login"});
    expect(loginbutton).toBeInTheDocument();
    
    expect(loginbutton2).toBeInTheDocument();
    const cartItems = screen.getByText("Home");
    expect(cartItems).toBeInTheDocument();
    
});
it("it should change login button with a logout button ",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    
    )
   
  
    const loginbutton= screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);
    const logoutbutton= screen.getByRole("button",{name:"Logout"});
    expect(logoutbutton).toBeInTheDocument();
    
})