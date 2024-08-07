import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurentCard from "./components/Restaurantcard";
import About from "./components/About";
import Contact from "./Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/Appstore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";



  const Grocery=lazy(()=>import("./components/Grocery"));
  


const AppLayout = () => {
  const [userInfo,setuserInfo]=useState();
  useEffect(()=>{
    const data ={
      name:"Swarnim Rajput"
    };
    setuserInfo(data.name);
  },[]);
  return (
    <Provider store={appStore}>
       <Usercontext.Provider value={{loggedInUser:userInfo,setuserInfo}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </Usercontext.Provider>
    </Provider>
   
  );
};
const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading... </h1>}><Grocery/></Suspense>,
      },

      
      {
        path:"/restaurants/:resId",
        element:<RestaurentMenu/>,
      },
      {
        path:"/Cart",
        element:<Cart/>,
      },
    
    ],
    errorElement:<Error/>
  },
 

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);
