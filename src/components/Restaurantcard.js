import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import Usercontext from "../utils/Usercontext";

const RestaurentCard = (props) => {
    const { resdata } = props;

    const {loggedInUser}=useContext(Usercontext)
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}= resdata?.info;
  
    return (
      <div data-testid="rescard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200  " >
        <div>
          <img
            className="rounded-lg"
            src={CDN_URL
            +cloudinaryImageId}
            alt="restaurant"
          />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} Minutes</h4>
         
        </div>
      </div>
    );
  };
  export default RestaurentCard;