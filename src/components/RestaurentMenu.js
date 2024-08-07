
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../useRestaurentMenu";
import Restaurentcategory from "./Restaurentcategory";
import { useState } from "react";

const RestaurentMenu = () => {
    
    const { resId } = useParams();

    const resinfo=useRestaurentMenu(resId);

    const[showIndex,setShowIndex]=useState(0);

    if (resinfo === null) {
        return <Shimmer />;
    }

    const {
        name,
        cuisines,
        costForTwoMessage
    } = resinfo?.cards?.[2]?.card?.card?.info || {};

    const itemCards = resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards 
        || resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards 
        || [];
        //console.log(resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories =resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>
            <Restaurentcategory key={category?.card?.card?.title} data={category?.card?.card}
            showItems={index===showIndex ? true:false}
            setShowIndex={()=>setShowIndex(index)}
             />)}
            
        </div>
    );
};

export default RestaurentMenu;
