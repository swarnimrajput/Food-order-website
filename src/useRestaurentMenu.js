import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { MENU_UPI } from "./utils/contants";
const useRestaurentMenu=(resId)=>{
const [resinfo,setresinfo]=useState(null);
useEffect(()=>{
    fetchData();
},[]);
const fetchData = async()=>{
const data = await fetch(MENU_UPI+resId);
const json= await data.json();
setresinfo(json.data);
}

return resinfo;

}
export default useRestaurentMenu;
